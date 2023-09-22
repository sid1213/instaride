"use client";
import React from "react";
import Style from "./style.module.scss";
import { Layout } from "antd";
import FilterCard from "@/components/vehicles/VehicleCard";
import { Bike_Data } from "../../Mock_Data/bike";

const { Header, Sider, Content } = Layout;

function BikeRentalSearch() {
  return (
    <Layout className={Style.bike_rental_search}>
      <Header></Header>
      <Layout hasSider>
        <Sider></Sider>
        <Content>
          {Bike_Data.length > 0 &&
            Bike_Data?.map((item) => {
              return <FilterCard data={item} key={item.id} />;
            })}
        </Content>
      </Layout>
    </Layout>
  );
}

export default BikeRentalSearch;
