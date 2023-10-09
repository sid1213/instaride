"use client";
import React, { useState } from "react";
import Style from "./style.module.scss";
import { Select, Input, Modal, Space, Typography } from "antd";
import Image from "next/image";
import Title from "antd/es/typography/Title";
import Button from "@/components/Ui/Button";
const { Text } = Typography;
const { Option } = Select;
function Login() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [items, setItems] = useState([
    {
      label: (
        <Space>
          <Image width={20} height={20} src={"/demo/india.svg"} alt="india" />
          <p>+91</p>
        </Space>
      ),
      value: "india",
    },
    {
      label: (
        <Space align="center">
          <Image width={20} height={20} src={"/demo/india.svg"} alt="india" />
          <p>+91</p>
        </Space>
      ),
      value: "india",
    },
  ]);

  const showLoginModel = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="container">
      <li onClick={showLoginModel}>Login</li>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={Style.login_popup}
        centered
      >
        <Space align="center" direction="vertical" className={Style.flex_box}>
          <Title level={4} className={Style.heading}>
            Welcome to GoBikes Commuting Made Easy, Affordable and Quick
          </Title>
          <Space.Compact block>
            <Select
              style={{ width: 100 }}
              defaultValue={items[0].label}
              allowClear
              options={items.map((item) => ({
                label: item.label,
                value: item.value,
              }))}
            />
            <Input
              type="number"
              defaultValue="Xihu District, Hangzhou"
              placeholder="Phone Number"
            />
          </Space.Compact>
          <Button title="SEND OTP" fit={100} size="medium" />
        </Space>
      </Modal>
    </section>
  );
}

export default Login;
