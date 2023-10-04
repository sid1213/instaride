import React from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Filter from "@/components/Vehicle/Filter";
import Vehicle from "@/components/Vehicle";
import Style from "./style.module.scss";

const City = () => {
  return (
    <Layout className={Style.city}>
      <Layout hasSider>
        <Sider className={Style.sider} width={250}>
          <Filter />
        </Sider>
        <Content className={Style.content}>
          <Vehicle />
        </Content>
      </Layout>
    </Layout>
  );
};
export default City;
