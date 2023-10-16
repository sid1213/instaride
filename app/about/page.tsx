import React from "react";
import { Col, Row, Space, Flex, Card } from "antd";
import Title from "antd/es/typography/Title";
import Style from "./styel.module.scss";
import Paragraph from "antd/es/typography/Paragraph";
import FeatureCard from "@/components/Ui/FeatureCard";
import { WhyChooseUs } from "@/types/index";
import { AiFillTrademarkCircle, AiOutlineDollar } from "react-icons/ai";
import { RiEBikeFill, RiCustomerService2Fill } from "react-icons/ri";
import TeamMember from "@/components/About/TeamMember";

const items: WhyChooseUs[] = [
  {
    icon: "Quality Bikes",
    subtitle:
      "We offer a diverse range of bikes, from mountain bikes to city cruisers, all meticulously maintained for your safety and comfort.",
  },
  {
    icon: "Easy Reservations",
    subtitle:
      "Our user-friendly website and booking system make reserving your bike a breeze.",
  },
  {
    icon: "Exceptional Customer Service",
    subtitle:
      "Our team is always ready to assist you with any inquiries or special requests.",
  },

  {
    icon: "Affordable Rates",
    subtitle:
      "We believe in making biking accessible to all, offering competitive pricing to fit your budget.",
  },
];
function About() {
  return (
    <Row className={Style.about} justify={"center"}>
      <Space direction="vertical" align="center" className="heading">
        <Title level={2}>ABOUT US</Title>
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
      <Col span={24} className="choose_us">
        <Title level={3}>Why Choose Us?</Title>
        <Row justify={"space-between"}>
          {items.map((item) => (
            <Col key={item.icon} span={24} md={12} lg={4}>
              <FeatureCard
                icon={
                  item.icon === "Quality Bikes" ? (
                    <RiEBikeFill />
                  ) : item.icon === "Easy Reservations" ? (
                    <AiFillTrademarkCircle />
                  ) : item.icon === "Exceptional Customer Service" ? (
                    <RiCustomerService2Fill />
                  ) : item.icon === "Affordable Rates" ? (
                    <AiOutlineDollar />
                  ) : (
                    ""
                  )
                }
                subTitle={item.subtitle}
                title={item.icon.split(/(?=[A-Z])/).join(" ")}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <Col span={24} className="our_team">
        <Title level={3}>Our Team</Title>
        <Flex gap={"5rem"} justify="center" wrap="wrap">
          <TeamMember
            image="/demo/Jagrati.jpg"
            tag="Developer"
            title="Jagrati Gupta"
            description="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
            culpa."
          />
          <TeamMember
            image="/demo/Siddharth.jpg"
            tag="Developer"
            title="Siddharth Soni"
            description="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
            culpa."
          />
        </Flex>
      </Col>
    </Row>
  );
}

export default About;
