"use client";
import React, { useState } from "react";
// utils
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Style from "./style.module.scss";
import Title from "antd/es/typography/Title";
import SummaryOfVehicle from "@/components/Checkout/sider";
import FareDetails from "@/components/Checkout/content";
function Checkout() {
  // set partial payment true-false
  const [isPartial, setIsPartial] = useState<boolean>(false);
  return (
    <Layout className={Style.checkout}>
      <Header className={Style.header}>
        <Title level={5}>Summary</Title>
      </Header>
      <Layout hasSider className={Style.innerlayout}>
        <Sider className={Style.sider}>
          <SummaryOfVehicle setIsPartial={setIsPartial} />
        </Sider>
        <Content className={Style.content}>
          <FareDetails isPartial={isPartial} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Checkout;
