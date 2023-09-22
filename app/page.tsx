"use client";
import { Col, Row } from "antd";
import Style from "./page.module.scss";
import SearchCard from "@/components/Home/SearchCard";

const Home = () => {
  return (
    <section className={Style.container}>
      <Row justify={"center"} className={Style.main}>
        <Col span={24} className={Style.left} md={24} lg={12}>
          <SearchCard />
        </Col>
        <Col span={12} className={Style.right}>
          col-12
        </Col>
      </Row>
    </section>
  );
};
export default Home;
