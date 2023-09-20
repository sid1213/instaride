"use client";
import { Card, Col, DatePicker, Form, Input, Row, Select } from "antd";
import Style from "./page.module.scss";
import SearchCard from "@/components/home/SearchCard";
import { useAppSelector } from "../slices";

export default function Home() {
  return (
    <section>
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
}
