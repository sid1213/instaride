import React, { useState } from "react";
import Style from "./style.module.scss";
import { Select, Card, Badge, Button, Col, Row } from "antd";
import classNames from "classnames";

const { Meta } = Card;

function FilterCard() {
  const [isFlip, setIsFlip] = useState<boolean>(false);

  const handelFlipCard = () => {
    console.log("flip");
    setIsFlip(!isFlip);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Badge.Ribbon
      text="Pay at Pickup Available"
      color="lime"
      className={Style.ribbon}
    >
      <Badge.Ribbon text="58 Trips" color="gold" className="gold">
        <Card
          className={Style.filterCard}
          title="Honda Activa"
          extra={
            <>
              <Badge.Ribbon
                text="58 Trips"
                color="gold"
                className={Style.ribbon}
              ></Badge.Ribbon>

              <Button onClick={handelFlipCard}>
                {isFlip ? "View All Packages" : "Back"}
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
              <div className="select_box">
                <Select
                  defaultValue="lucy"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
                <label>Available at</label>
              </div>

              <div className="price">
                <p>
                  &#8377; 299
                  <span>200 Km limit</span>
                </p>
                <Button type="primary"> Book Now</Button>
              </div>

              <div className="footer">
                <p>Deposit : &#8377; 0</p>
                <p>Make Year : 2014</p>
              </div>
            </Col>

            <Col className={classNames("back-card")}>
              <Week_count />
              <Week_count />
              <Week_count />
              <Week_count />
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
    </Badge.Ribbon>
  );
}

export default FilterCard;

export const Week_count = () => {
  return (
    <div className="weeks_count">
      <p>Daily</p>
      <h3>
        &#8377; 1499 <small>Per Day</small>
      </h3>
      <h4>(250 km included)</h4>
    </div>
  );
};
