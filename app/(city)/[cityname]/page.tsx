import React from "react";
import Style from "./style.module.scss";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

const City = () => {
  return (
    <Layout className={Style.city}>
      <Header className={Style.header}>Header</Header>
      <Layout hasSider>
        <Sider className={Style.sider}>Sider</Sider>
        <Content className={Style.content}>Card</Content>
      </Layout>
    </Layout>
  );
};
export default City;
