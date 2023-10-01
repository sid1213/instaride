"use client";
import React from "react";
import Style from "./style.module.scss";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

const City = () => {
  return (
    <Layout className={Style.city}>
      <Header>Header</Header>
      <Layout hasSider>
        <Sider className={Style.filter_sider}>Sider</Sider>
        <Content className={Style.card_content}>Card</Content>
      </Layout>
    </Layout>
  );
};
export default City;
