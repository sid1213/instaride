"use client";
import {
  Button,
  Col,
  Divider,
  Form,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import React from "react";
import Style from "./index.module.scss";
import Image from "next/image";
import classNames from "classnames";

const { Title, Paragraph, Text } = Typography;
const Reminder_Data = [
  {
    title: "Kilometer Limit",
    limit: "150 kms",
  },
  {
    title: "Kilometer Limit",
    limit: "150 kms",
  },
  {
    title: "Kilometer Limit",
    limit: "150 kms",
  },
  {
    title: "Kilometer Limit",
    limit: "150 kms",
  },
];
function SummaryOfVehicle() {
  const [form] = Form.useForm();
  const onFinish = () => {};
  return (
    <Row className={Style.vehicle_summary}>
      {/* vehicle details */}
      <Space align="start" className={Style.vehicle}>
        <Col>
          <Image
            src={"/demo/Suzuki-Access-125.png"}
            alt="bike"
            width={220}
            height={150}
          />
        </Col>

        {/* fare details */}
        <Space direction="vertical" className={Style.fare_details}>
          <Title level={5}>Bajaj pluser 150</Title>

          <Space direction="vertical" className={Style.breakup}>
            <Paragraph className={Style.price}>
              Rent Amount : <span>&#8377;650</span>
            </Paragraph>
            <Paragraph className={Style.price}>
              Refundable Deposit : <span>&#8377;3000</span>
            </Paragraph>
          </Space>

          <Space className={Style.mobile_breakup}>
            <Paragraph className={Style.price}>
              Rental <br /> <span>&#8377;650</span>
            </Paragraph>
            <Paragraph className={Style.plus_sign}>+</Paragraph>
            <Paragraph className={Style.price}>
              Deposit <br /> <span>&#8377;3000</span>
            </Paragraph>
          </Space>

          <Space align="center" className={Style.quantity}>
            <Button>
              <MinusOutlined />
            </Button>
            <Paragraph className={Style.count}>1</Paragraph>
            <Button>
              <PlusOutlined />
            </Button>
          </Space>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className={Style.form}
          >
            <Form.Item>
              <Select
                defaultValue="Payment Mode : Full Payment"
                options={[
                  {
                    value: "Payment Mode : Full Payment",
                    label: "Payment Mode : Full Payment",
                  },
                  {
                    value: "Payment Mode : Partial Payment",
                    label: "Payment Mode : Partial Payment",
                  },
                ]}
              />
            </Form.Item>
          </Form>
        </Space>
      </Space>

      {/* pickup dates & location */}
      <Space direction="vertical" className={Style.pickup_date_container}>
        {/* pickup dates*/}
        <Space direction="vertical">
          <Paragraph className={Style.heading}>Pickup and Drop Date</Paragraph>
          <Row className={Style.pickup_date} justify={"space-between"}>
            <Space>
              <Title level={2}>6</Title>
              <Paragraph className={Style.date}>
                October 2023
                <br />
                <span> 10:00 AM</span>
              </Paragraph>
            </Space>
            <Divider className={Style.divider}>1 Day</Divider>
            <Space>
              <Title level={2}>6</Title>
              <Paragraph className={Style.date}>
                October 2023
                <br />
                <span> 10:00 AM</span>
              </Paragraph>
            </Space>
          </Row>
        </Space>

        {/* pickup  location */}
        <Space direction="vertical">
          <Paragraph className={Style.heading}>
            Pickup and Drop Location
          </Paragraph>
          <Text className={Style.location}>
            <EnvironmentOutlined />
            ABES Engineering college
          </Text>
        </Space>
      </Space>

      <Space
        direction="vertical"
        className={classNames(
          Style.pickup_date_container,
          Style.pickup_date_mobile
        )}
      >
        {/* pickup dates*/}
        <Space direction="vertical">
          <Paragraph className={Style.heading}>Pickup and Drop Date</Paragraph>
          <Text className={Style.location}>
            <FieldTimeOutlined />6 October 2023, 10:00AM
          </Text>
          <Text className={Style.location}>
            <FieldTimeOutlined />6 October 2023, 10:00AM
          </Text>
        </Space>

        {/* pickup  location */}
        <Space direction="vertical">
          <Paragraph className={Style.heading}>
            Pickup and Drop Location
          </Paragraph>
          <Text className={Style.location}>
            <EnvironmentOutlined />
            ABES Engineering college
          </Text>
        </Space>
      </Space>

      {/* reminder things */}
      <Row gutter={[16, { xs: 0, xl: 5 }]} className={Style.reminder}>
        <Col span={24}>
          <Paragraph className={Style.heading}>Things to remember</Paragraph>
        </Col>
        {Reminder_Data.map((item, i) => {
          return (
            <Col xl={12} md={24} span={24} key={i}>
              <Row justify={"space-between"}>
                <Paragraph>{item.title}</Paragraph>
                <Paragraph>{item.limit}</Paragraph>
              </Row>
            </Col>
          );
        })}
      </Row>
    </Row>
  );
}

export default SummaryOfVehicle;
