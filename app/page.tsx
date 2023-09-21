"use client";
import { Col, Row } from "antd";
import Style from "./page.module.scss";
import SearchCard from "@/components/home/SearchCard";

const Home = () => {
  return (
    <section>
      <Row justify={"center"} className={Style.main}>
        <Col span={24} className={Style.left} sm={24} md={12} lg={12}>
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
