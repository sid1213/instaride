"use client";
import React from "react";
import Style from "./index.module.scss";
import { Col, Row, Space } from "antd";
import VehicleCard from "@/components/Vehicle/VehicleSingle/VehicleCard";
import BookNowFrom from "@/components/Vehicle/VehicleSingle/BookNowForm/Index";
import RulesTable from "@/components/Ui/RulesTable";
import RulesList from "@/components/Ui/RulesList/Index";
import InformationCard from "./InformationCard";
import BikeFeatures from "./BikeFeatures";
import Title from "antd/es/typography/Title";
import Button from "@/components/Ui/Button";
import ContainerMain from "@/components/ContainerMain";

const list = [
  `Documents Required:- Copy of Aadhar Card and Driving License. Digilocker documents are also accepted.
`,
  `For International customers, a copy of Passport and International Driving License are required.
`,
  `Security Deposit is refunded after the drop after checking the challans and damages.
`,
  `Fuel Charges are not included in the security deposit or rent.
`,
  `In case of any damage to the vehicle, the customer is liable to pay the repair charges plus the labour charges as per the Authorised Service Center.
`,
  `If the customer is late beyond 3 hours then customer is liable to pay full day rent plus late penalty charges.
`,
];

const VehicleSingle = () => {
  return (
    <ContainerMain>
      <Row className={Style.main}>
        <Col span={24} md={24} lg={14} xl={14} className={Style.left}>
          <VehicleCard />
        </Col>
        <Col span={24} md={24} lg={10} xl={10} className={Style.right}>
          <BookNowFrom />
          <RulesTable />
          <RulesList title="Terms and Conditions" list={list} />
        </Col>
        <Col span={24} className={Style.bottomOne}>
          <InformationCard />
        </Col>
        <Col span={24} className={Style.bottomOne}>
          <BikeFeatures />
        </Col>
      </Row>
    </ContainerMain>
  );
};

export default VehicleSingle;
