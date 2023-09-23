import React from "react";
import Style from "./index.module.scss";
import { Col, Row } from "antd";
import VehicleCard from "@/components/Vehicle/VehicleSingle/VehicleCard";
import BookNowFrom from "@/components/Vehicle/VehicleSingle/BookNowForm/Index";

const VehicleName = () => {
  return (
    <section className={Style.container}>
      <Row className={Style.main}>
        <Col span={14} className={Style.left}>
          <VehicleCard />
        </Col>
        <Col span={10} className={Style.right}>
          <BookNowFrom />
        </Col>
      </Row>
    </section>
  );
};

export default VehicleName;
