"use client";
import React, { useState } from "react";
// utils
import { Col, Row } from "antd";
import Style from "./style.module.scss";
import Title from "antd/es/typography/Title";
import SummaryOfVehicle from "@/components/Checkout/sider";
import FareDetails from "@/components/Checkout/content";
import ContainerMain from "@/components/ContainerMain";
function Checkout() {
  // set partial payment true-false
  const [isPartial, setIsPartial] = useState<boolean>(false);
  return (
    <section className={Style.container}>
      <ContainerMain>
        <Row className={Style.main}>
          <Col span={24} className={Style.header}>
            <Title level={5}>Summary</Title>
          </Col>
          <Col span={24} md={24} lg={13} xl={13} className={Style.left}>
            <SummaryOfVehicle setIsPartial={setIsPartial} />
          </Col>
          <Col span={24} md={24} lg={10} xl={10} className={Style.right}>
            <FareDetails isPartial={isPartial} />
          </Col>
        </Row>
      </ContainerMain>
    </section>
  );
}

export default Checkout;
