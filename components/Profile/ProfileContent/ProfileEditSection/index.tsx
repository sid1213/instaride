"use client";
import React, { useState } from "react";
import Style from "./style.module.scss";
import { Col, Divider, Form, Input, Row, Space, Typography } from "antd";
import { AiOutlineLeft } from "react-icons/ai";
import Button from "@/components/Ui/Button";

const { Title, Text } = Typography;
interface PropsType {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
function ProfileEditSection({ setVisible }: PropsType) {
  return (
    <Row className={Style.profile_edit_section}>
      <Space className={Style.profile_header}>
        <Col className={Style.left_arrow} onClick={() => setVisible(false)}>
          <AiOutlineLeft />
        </Col>

        <Col className={Style.heading}>
          <Title level={5}>Profile</Title>
          <Text>Manage your details</Text>
        </Col>
      </Space>
      <Divider />

      <Col span={24} className={Style.profile_details_body}>
        {/* form for name */}
        <Space direction="vertical" className={Style.flex_box}>
          <Col span={24}>
            <p>Name</p>
            <p className={Style.edit_btn}>Edit</p>
          </Col>
          <Col span={24}>
            <span className={Style.field_value}>Jagrati Gupta</span>
          </Col>
          <Form
            name="name"
            className={Style.input_form}
            autoComplete="off"
            layout="vertical"
          >
            <Space.Compact direction="horizontal" block>
              <Form.Item
                style={{ width: "100%" }}
                label="First name"
                name="firstname"
                rules={[{ required: true, message: "first name required" }]}
                className="primary"
              >
                <Input />
              </Form.Item>

              <Form.Item
                style={{ width: "100%" }}
                label="Last name"
                name="lastname"
                rules={[{ required: true, message: "last name required" }]}
                className="primary"
              >
                <Input />
              </Form.Item>
            </Space.Compact>

            <Form.Item>
              <Button
                title={"Save"}
                fit="fit"
                size="medium"
                htmlType="submit"
              />
            </Form.Item>
          </Form>
        </Space>
        <Divider />

        {/* for email */}
        <Space direction="vertical" className={Style.flex_box}>
          <Col span={24}>
            <p>Email</p>
            <p className={Style.edit_btn}>Edit</p>
          </Col>
          <Col span={24}>
            <span className={Style.field_value}>jagratigupta@gmail.com</span>
          </Col>

          <Form
            name="email"
            className={Style.input_form}
            autoComplete="off"
            layout="vertical"
          >
            <Space.Compact direction="horizontal" block>
              <Form.Item
                style={{ width: "100%" }}
                label="Email Id"
                name="email"
                rules={[{ required: true, message: "email id required" }]}
                className="primary"
              >
                <Input />
              </Form.Item>
            </Space.Compact>

            <Form.Item>
              <Button
                title={"Save"}
                fit="fit"
                size="medium"
                htmlType="submit"
              />
            </Form.Item>
          </Form>
        </Space>
        <Divider />

        {/* for mobile */}
        <div className={Style.profile_input_wrap}>
          <span>Mobile</span>
          <p> +91 00000000</p>
        </div>
        <Divider />

        {/* edit for address */}
        <Space direction="vertical" className={Style.flex_box}>
          <Col span={24}>
            <p>Address</p>
            <p className={Style.edit_btn}>Edit</p>
          </Col>
          <Col span={24}>
            <span className={Style.field_value}>not provided</span>
          </Col>

          <Form
            name="address"
            className={Style.input_form}
            autoComplete="off"
            layout="vertical"
          >
            <Space.Compact direction="horizontal" block>
              <Form.Item
                style={{ width: "100%" }}
                label="Address"
                name="address"
                className="primary"
              >
                <Input />
              </Form.Item>
            </Space.Compact>

            <Form.Item>
              <Button
                title={"Save"}
                fit="fit"
                size="medium"
                htmlType="submit"
              />
            </Form.Item>
          </Form>
        </Space>
      </Col>
    </Row>
  );
}

export default ProfileEditSection;
