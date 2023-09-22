import React from "react";
import Style from "./index.module.scss";
import { Col, Row } from "antd";

const VehicleName = () => {
  return (
    <section className={Style.container}>
      <Row className={Style.main}>
        <Col span={12} className={Style.left}>
          col-8
        </Col>
        <Col span={12} className={Style.right}>
          col-8
        </Col>
      </Row>
    </section>
  );
};

export default VehicleName;
