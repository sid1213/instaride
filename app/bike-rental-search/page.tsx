"use client";
import React from "react";
import Style from "./style.module.scss";
import { Layout } from "antd";
import FilterCard from "@/components/FilterCard";
import { Bike_Data } from "../../Mock_Data/bike";

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
function BikeRentalSearch() {
  return (
    <Layout className={Style.bike_rental_search}>
      <Header style={headerStyle}>Header</Header>
      <Layout hasSider>
        <Sider style={siderStyle}>Sider</Sider>
        <Content>
          {Bike_Data.length > 0 &&
            Bike_Data?.map((item) => {
              return <FilterCard data={item} />;
            })}
        </Content>
      </Layout>
    </Layout>
  );
}

export default BikeRentalSearch;
