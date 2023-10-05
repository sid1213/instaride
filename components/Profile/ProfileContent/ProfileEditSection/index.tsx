"use client";
import React, { useState } from "react";
import Style from "./style.module.scss";
import { Col, Divider, Form, Input, Row, Space, Tag, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { AiOutlineLeft } from "react-icons/ai";
import Button from "@/components/Ui/Button";

const { Title, Text } = Typography;
interface PropsType {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
}
function ProfileEditSection({ setVisible }: PropsType) {
  // initial Data for form values
  const initialData = {
    nameField: "Jagrati Gupta",
    emailField: "123jagratigupta@gmail.com",
    addressField: "Not provided",
  };
  const [form] = Form.useForm();
  const [data, setData] = useState(initialData);

  // get values from data
  const [firstname, lastname] = data.nameField.split(" ");
  const email = data.emailField;
  const address = data.addressField;

  // set Edit fields
  const [edit, setEdit] = useState({
    nameField: false,
    emailField: false,
    addressField: false,
  });

  // toggle visibility
  const toggleVisibilyOfEditFields = (fieldName: keyof typeof edit) => {
    setEdit((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  // handle onSubmit
  const onFinish = (fieldName: keyof typeof edit, values: FormValues) => {
    if (fieldName === "nameField") {
      setData((prev) => ({
        ...prev,
        [fieldName]: `${values.firstname} ${values.lastname}`,
      }));
    } else if (fieldName === "emailField") {
      setData((prev) => ({
        ...prev,
        [fieldName]: values.email,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [fieldName]: `${values.address}`,
      }));
    }
    setEdit((prev) => ({ ...prev, [fieldName]: !prev[fieldName] }));
  };

  return (
    <Row className={Style.profile}>
      <Space className={Style.profile_header} align="baseline">
        <Col className={Style.left_arrow} onClick={() => setVisible(false)}>
          <AiOutlineLeft />
        </Col>

        <Col className={Style.heading}>
          <Title level={5}>Profile</Title>
          <Text>Manage your details</Text>
        </Col>
      </Space>
      <Divider />

      <Col span={24} className={Style.profile_details}>
        {/* form for name */}
        <Space direction="vertical" className={Style.flex}>
          <Col span={24}>
            <p>Name</p>
            <p
              className={Style.edit_btn}
              onClick={() => toggleVisibilyOfEditFields("nameField")}
            >
              {!edit.nameField ? "Edit" : "Cancel"}
            </p>
          </Col>
          {!edit.nameField && (
            <Col span={24}>
              <span className={Style.field_label}>{data.nameField}</span>
            </Col>
          )}
          {edit.nameField && (
            <Form
              name="name"
              form={form}
              className={Style.form}
              autoComplete="off"
              layout="vertical"
              onFinish={(values) => onFinish("nameField", values)}
              initialValues={{ firstname, lastname }}
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
          )}
        </Space>
        <Divider />

        {/* for email */}
        <Space direction="vertical" className={Style.flex}>
          <Col span={24}>
            <p>Email</p>
            <p
              className={Style.edit_btn}
              onClick={() => toggleVisibilyOfEditFields("emailField")}
            >
              {!edit.emailField ? "Edit" : "Cancel"}
            </p>
          </Col>

          {!edit.emailField && (
            <Col span={24}>
              <span className={Style.field_label}>{data.emailField}</span>
            </Col>
          )}
          {edit.emailField && (
            <Form
              name="email"
              className={Style.form}
              autoComplete="off"
              layout="vertical"
              onFinish={(values) => onFinish("emailField", values)}
              initialValues={{ email }}
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
          )}
        </Space>
        <Divider />

        {/* for mobile */}
        <Space className={Style.mobile_verify} direction="vertical">
          <span>Mobile Number</span>
          <p>
            00000000{" "}
            <Tag
              icon={<CheckCircleOutlined />}
              className={Style.verify_msg}
              color="success"
            >
              Verified
            </Tag>
          </p>
        </Space>
        <Divider />

        {/* edit for address */}
        <Space direction="vertical" className={Style.flex}>
          <Col span={24}>
            <p>Address</p>
            <p
              className={Style.edit_btn}
              onClick={() => toggleVisibilyOfEditFields("addressField")}
            >
              {!edit.addressField ? "Edit" : "Cancel"}
            </p>
          </Col>
          {!edit.addressField && (
            <Col span={24}>
              <span className={Style.field_label}>{data.addressField}</span>
            </Col>
          )}
          {edit.addressField && (
            <Form
              name="address"
              className={Style.form}
              autoComplete="off"
              layout="vertical"
              onFinish={(values) => onFinish("emailField", values)}
              initialValues={{ address }}
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
          )}
        </Space>
      </Col>
    </Row>
  );
}

export default ProfileEditSection;
