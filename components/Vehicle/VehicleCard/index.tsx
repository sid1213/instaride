"use client";
import React, { useState } from "react";
import Style from "./style.module.scss";
import { Select, Card, Badge, Button, Col, Row } from "antd";
import classNames from "classnames";

interface vehicleProps {
  data: {
    id: number;
    brand: string;
    name: string;
    tips: number;
    pickup: boolean;
    hubs: string[];
    price: number;
    limit: number;
    deposit: number;
    make_year: number;
    img: string;
    duration: {
      name: string;
      price: number;
      limit: number;
    }[];
    available: boolean;
    transmission: string;
    available_date: string | null;
  };
}
const VehicleCard = ({ data }: vehicleProps) => {
  const [isFlip, setIsFlip] = useState<boolean>(false);

  // For flip card
  const handelFlipCard = () => setIsFlip(!isFlip);

  // for select box
  const handleChange = (value: string) => {};

  return (
    <Badge.Ribbon
      text={data.pickup ? "Pay at Pickup Available" : ""}
      color="lime"
      className={Style.ribbon}
    >
      {/* Available button */}
      {data.available && (
        <Button className={Style.available_btn}>
          Available till {data.available_date}
        </Button>
      )}

      {/* Vehicle Card */}
      <Card
        className={classNames(
          Style.vehicleCard,
          data.available ? Style.disableCard : ""
        )}
        title={`${data.brand} ${data.name}`}
        extra={
          <>
            <Badge.Ribbon
              text={`${data.tips} Trips`}
              color="gold"
            ></Badge.Ribbon>
            <Button onClick={handelFlipCard}>
              {!isFlip ? "View All Packages" : "Back"}
            </Button>
          </>
        }
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Row className={classNames("card-body", isFlip ? "flipCard" : "")}>
          <Col className={classNames("front-card")}>
            <div className={Style.select_box}>
              <Select
                defaultValue={data.hubs[0]}
                disabled={data.hubs.length === 1 ? true : false}
                onChange={handleChange}
                options={data.hubs.map((hub, i) => {
                  return { value: hub, label: hub };
                })}
              />
              <label>Available at</label>
            </div>

            <div className="price">
              <p>
                &#8377; {data.price}
                <span>{data.limit} Km limit</span>
              </p>
              <Button type="primary"> Book Now</Button>
            </div>

            <div className="footer">
              <p>Deposit : &#8377; {data.deposit}</p>
              <p>Make Year : {data.make_year}</p>
            </div>
          </Col>

          <Col className={classNames("back-card")}>
            {data.duration?.map((item, i) => {
              return <DurationOfBike data={item} key={i} />;
            })}
          </Col>
        </Row>
      </Card>
    </Badge.Ribbon>
  );
};

export default VehicleCard;

interface Props {
  data: {
    name: string;
    price: number;
    limit: number;
  };
}
export const DurationOfBike = ({ data }: Props) => {
  return (
    <div className="duration">
      <p>{data.name}</p>
      <h3>
        &#8377; {data.price} <small>Per Day</small>
      </h3>
      <h4>({data.limit} km included)</h4>
    </div>
  );
};
