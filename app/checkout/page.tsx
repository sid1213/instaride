import React from "react";
// utils
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Style from "./style.module.scss";
import Title from "antd/es/typography/Title";
import SummaryOfVehicle from "@/components/Checkout/sider";
import FareDetails from "@/components/Checkout/content";
function Checkout() {
  return (
    <Layout className={Style.checkout}>
      <Header className={Style.header}>
        <Title level={5}>Summary</Title>
      </Header>
      <Layout hasSider>
        <Sider className={Style.sider} width={800}>
          <SummaryOfVehicle />
        </Sider>
        <Content className={Style.content}>
          <FareDetails />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Checkout;
