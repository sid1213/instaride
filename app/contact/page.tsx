import React from "react";
import Style from "./style.module.scss";
import { Col, Row } from "antd";
import Content from "@/components/Contact/Content";
import ContactForm from "@/components/Contact/ContactForm";

function Contact() {
  return (
    <section className={Style.container}>
      <Row className={Style.row}>
        <Col md={24} lg={10} xl={10} span={24}>
          <Content />
        </Col>
        <Col md={24} lg={10} xl={10} span={24}>
          <ContactForm />
        </Col>
      </Row>
    </section>
  );
}

export default Contact;
