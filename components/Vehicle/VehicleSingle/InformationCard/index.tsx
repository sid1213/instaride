import { Col, Row } from "antd";
import React from "react";
import Style from "./index.module.scss";
import Title from "antd/es/typography/Title";
import FeatureCard from "./FeatureCard";
import { ThingsToRemember } from "@/types/index";

const items: ThingsToRemember[] = [
  {
    icon: "SecurityDeposit",
    description:
      "ldbamscbaksbcaksh ks xs ncb jkasdbljasc scosucbou kq xkhqbxicq x q ",
    subtitle: "60",
  },
  {
    icon: "LocationTimings",
    description:
      "ldbamscbaksbcaksh ks xs ncb jkasdbljasc scosucbou kq xkhqbxicq x q ",
    subtitle: "60",
  },
  {
    icon: "DistanceLimit",
    description:
      "ldbamscbaksbcaksh ks xs ncb jkasdbljasc scosucbou kq xkhqbxicq x q ",
    subtitle: "60",
  },

  {
    icon: "ExcessCharge",
    description:
      "ldbamscbaksbcaksh ks xs ncb jkasdbljasc scosucbou kq xkhqbxicq x q ",
    subtitle: "60",
  },
  {
    icon: "LatePenalty",
    description:
      "ldbamscbaksbcaksh ks xs ncb jkasdbljasc scosucbou kq xkhqbxicq x q ",
    subtitle: "60",
  },
  {
    icon: "SpeedLimit",
    description:
      "ldbamscbaksbcaksh ks xs ncb jkasdbljasc scosucbou kq xkhqbxicq x q ",
    subtitle: "60",
  },
];

const InformationCard = () => {
  return (
    <div className={Style.card}>
      <Title level={4}>Things To Remember</Title>
      <Row className={Style.cardRow}>
        {items.map((item) => (
          <Col span={4} xs={24} sm={12} lg={8} xl={4} key={item.icon}>
            <FeatureCard
              icon={item.icon}
              description={item.description}
              subtitle={item.subtitle}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default InformationCard;
