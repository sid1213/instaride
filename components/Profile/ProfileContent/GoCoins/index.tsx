import React from "react";
import Style from "./style.module.scss";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

function GoCoins() {
  return (
    <section className={Style.goCoins}>
      <div className="header">
        <Title level={5}>Coming Soon...</Title>
      </div>
    </section>
  );
}

export default GoCoins;
