"use client";
import React, { useState } from "react";
import Style from "./style.module.scss";
import { Select, Card, Button, Col, Row, Tag, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import classNames from "classnames";
import Image from "next/image";

const { Title, Text } = Typography;
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
    <Col className={Style.vehicle_card_col}>
      {/* Available button */}
      {data.available && (
        <Button className="available_btn">
          Available till {data.available_date}
        </Button>
      )}

      {/* Vehicle Card */}
      <Card
        className={classNames(
          Style.vehicle_card,
          data.available ? Style.disable_card : ""
        )}
        title={`${data.brand} ${data.name}`}
        extra={
          <Space className={Style.tags}>
            {data.pickup && (
              <Tag
                icon={<CheckCircleOutlined />}
                color="success"
                className={Style.ribbon}
              >
                Pay at Pickup Available
              </Tag>
            )}
          </Space>
        }
        cover={
          <Image
            width={100}
            height={100}
            alt={data.brand}
            src={"/demo/Suzuki-Access-125.png"}
          />
        }
      >
        <Button onClick={handelFlipCard} className={Style.flip_btn}>
          {!isFlip ? "View All Packages" : "Back"}
        </Button>

        <Row className={classNames(Style.card, isFlip ? Style.flip_card : "")}>
          <Col className={Style.front_card} span={24}>
            <Col className={Style.select_box}>
              <Select
                defaultValue={data.hubs[0]}
                disabled={data.hubs.length === 1 ? true : false}
                onChange={handleChange}
                options={data.hubs.map((hub, i) => {
                  return { value: hub, label: hub };
                })}
              />
              <label>Available at</label>
            </Col>

            <Col className={Style.price}>
              <Text className={Style.pera}>
                &#8377; {data.price}
                <span>{data.limit} Km limit</span>
              </Text>
              <Button type="primary" className={Style.book_now_btn}>
                Book Now
              </Button>
            </Col>

            <Col className={Style.footer}>
              <Text>Deposit : &#8377; {data.deposit}</Text>
              <Text>Make Year : {data.make_year}</Text>
            </Col>
          </Col>

          <Col className={Style.back_card} span={24}>
            {data.duration?.map((item, i) => {
              return <DurationOfBike data={item} key={i} />;
            })}
          </Col>
        </Row>
      </Card>
    </Col>
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
    <Col className={Style.duration}>
      <Text>{data.name}</Text>
      <Title level={3}>&#8377; {data.price}</Title>
      <Title level={4}>({data.limit} km included)</Title>
    </Col>
  );
};
