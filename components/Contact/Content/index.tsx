import React from "react";
import { Space, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { BsBuildingsFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Style from "./index.module.scss";

interface propsType {
  icon: "Company" | "Address" | "Number";
  title: string;
  description: string;
}
const contactItems: propsType[] = [
  {
    icon: "Company",
    title: "Registered Company",
    description: "GoBikes Automotive Private Limited",
  },
  {
    icon: "Address",
    title: "Registered Address",
    description:
      "5th Floor, Seminar Building, Incubation Center IIIT Delhi, New Delhi, Delhi 110020",
  },
  {
    icon: "Number",
    title: "Mobile Number",
    description: "+91-8448444897",
  },
];
function Content() {
  return (
    <div className={Style.contact}>
      <Paragraph className={Style.para}>Contact Us</Paragraph>
      <Title level={1}>How can we help you?</Title>
      <Paragraph className={Style.msg}>
        Fill in the form or drop an email
      </Paragraph>

      <Space direction="vertical" size={"large"} className={Style.space}>
        {contactItems.map((item) => {
          return (
            <Space key={item.icon}>
              <Col className={Style.icon}>
                {item.icon === "Company" ? (
                  <BsBuildingsFill />
                ) : item.icon === "Address" ? (
                  <FaLocationDot />
                ) : item.icon === "Number" ? (
                  <FaPhoneAlt />
                ) : null}
              </Col>
              <Row gutter={8}>
                <Col span={24} className={Style.title}>
                  {item.title}
                </Col>
                <Col span={24} className={Style.subtitle}>
                  {item.description}
                </Col>
              </Row>
            </Space>
          );
        })}

        <Space>
          <Col className={Style.icon}>
            <MdEmail />
          </Col>
          <Row gutter={8}>
            <Col span={24} className={Style.text}>
              <span>Support : </span> support@gobikes.co.in
            </Col>
            <Col span={24} className={Style.text}>
              <span> Contact Us :</span> contact-us@gobikes.co.in
            </Col>
          </Row>
        </Space>
      </Space>
    </div>
  );
}

export default Content;
