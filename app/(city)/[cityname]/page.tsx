import React from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Bike_Data } from "Mock_Data/bike";
import VehicleCard from "@/components/Vehicle/VehicleCard";
import Filter from "@/components/Vehicle/Filter";
import Style from "./style.module.scss";
import ContainerMain from "@/components/ContainerMain";
import MobileFilter from "@/components/Vehicle/MobileFilter";

const City = () => {
  return (
    <ContainerMain className={Style.container}>
      <Layout className={Style.city}>
        <Layout hasSider>
          <Sider className={Style.sider} width={250}>
            <Filter />
            {/* <MobileFilter /> */}
          </Sider>
          <Content className={Style.content}>
            {Bike_Data.length > 0 &&
              Bike_Data?.map((item) => {
                return <VehicleCard data={item} key={item.id} />;
              })}

            <MobileFilter />
          </Content>
        </Layout>
      </Layout>
    </ContainerMain>
  );
};
export default City;
