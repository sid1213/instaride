"use client";
import React, { useState } from "react";
import Style from "./style.module.scss";
import { Button, Col, Form, Input, Row, Space, Typography } from "antd";
import ProfileInputWrap from "./ProfileInputWrap";
import { AiOutlineLeft } from "react-icons/ai";

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

      <Col span={24} className={Style.profile_details_body}>
        {/* form for name */}

        <Space direction="vertical" className={Style.flex_box}>
          <Col span={24}>
            <span>Name</span>
            <Button className={Style.edit_btn}>Edit</Button>
          </Col>
          <Col span={24}>
            <p>Jagrati Gupta</p>
          </Col>

          <Form
            name="name"
            className={Style.input_form}
            autoComplete="off"
            layout="vertical"
          >
            <Space>
              <Form.Item
                label="First name"
                name="firstname"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Last name"
                name="lastname"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Space>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={Style.save_btn}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Space>

        {/* for name */}
        <ProfileInputWrap
          labelName={"Name"}
          inputLabel={"Name"}
          inputType={"text"}
          inputValue={"jagrati gupta"}
        />

        {/* for email */}
        <ProfileInputWrap
          labelName={"Email"}
          inputLabel={"Email Id"}
          inputType={"email"}
          inputValue={"123jagrati@gmail.com"}
        />

        {/* for mobile */}
        <div className={Style.profile_input_wrap}>
          <span>Mobile</span>
          <p> +91 00000000</p>
        </div>

        {/* edit for address */}
        <ProfileInputWrap
          labelName={"Address"}
          inputLabel={"Address"}
          inputType={"text"}
          inputValue={"Not Provided"}
        />
      </Col>
    </Row>
  );
}

export default ProfileEditSection;
