import React from "react";
import Style from "./style.module.scss";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Bike_Data } from "Mock_Data/bike";
import VehicleCard from "@/components/Vehicle/VehicleCard";

const City = () => {
  return (
    <Layout className={Style.city}>
      <Header className={Style.header}>Header</Header>
      <Layout hasSider>
        <Sider className={Style.sider}>Sider</Sider>
        <Content className={Style.content}>
          {Bike_Data.length > 0 &&
            Bike_Data?.map((item) => {
              return <VehicleCard data={item} key={item.id} />;
            })}
        </Content>
      </Layout>
    </Layout>
  );
};
export default City;
