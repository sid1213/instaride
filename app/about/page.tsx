import { Col, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import Style from "./styel.module.scss";
import Paragraph from "antd/es/typography/Paragraph";

function About() {
  return (
    <Row className={Style.about} justify={"center"}>
      <Space direction="vertical" align="center" className="heading">
        <Title level={3}>ABOUT US</Title>
        <Paragraph className="para">Welcome to InstaRide</Paragraph>
      </Space>
      <Col xl={12} xs={24} className="intro_container">
        <Paragraph className="para">
          At InstaRide, we are passionate about providing the best vehicle
          experience for our customers. We take pride in offering a wide range
          of high-quality bikes and exceptional customer service. Our team of
          dedicated cycling enthusiasts is here to make your bike rental
          experience unforgettable.
        </Paragraph>
      </Col>
    </Row>
  );
}

export default About;
