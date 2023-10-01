"use client";
import React from "react";
import Style from "./style.module.scss";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

function City() {
  return (
    <Layout className={Style.city}>
      <Header></Header>
      <Layout hasSider>
        <Sider></Sider>
        <Content>Card</Content>
      </Layout>
    </Layout>
  );
}

export default City;
