import React from "react";
import Style from "./style.module.scss";
import { Select, Card, Badge, Button } from "antd";

const { Meta } = Card;

function FilterCard() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Badge.Ribbon text="58 Trips" color="gold">
      <Card
        className={Style.filterCard}
        title="Honda Activa"
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
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
      </Card>
    </Badge.Ribbon>
  );
}

export default FilterCard;
