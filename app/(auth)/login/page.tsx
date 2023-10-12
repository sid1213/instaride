"use client";
import React, { useState } from "react";
import Style from "./style.module.scss";
import { Select, Input, Modal, Space, Button } from "antd";
import Image from "next/image";
import Title from "antd/es/typography/Title";
// import Button from "@/components/Ui/Button";
import PersonalDetailsPopUp from "@/components/Login/PersonalDetailsPopUp";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [phoneNumber, setPhoneNumber] = useState<number | null>(null);
  const [isDisable, setIsDisable] = useState<boolean>(true);
  // for personal details
  const [isPersonalModelOpen, setIsPersonalModelOpen] =
    useState<boolean>(false);
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
          <Image
            width={20}
            height={20}
            src={"/demo/india.svg"}
            alt="australia"
          />
          <p>+91</p>
        </Space>
      ),
      value: "australia",
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
  const handleForMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value.length) <= 10) {
      setPhoneNumber(Number(e.target.value));
      e.target.value.length == 10 ? setIsDisable(false) : setIsDisable(true);
    } else {
      setIsDisable(false);
    }
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
            Welcome to <span>InstaRide</span> Commuting Made Easy, <br />
            Affordable and Quick
          </Title>
          <Space.Compact block>
            <Select
              style={{ width: 100 }}
              defaultValue={items[0].value}
              allowClear
              options={items.map((item) => ({
                label: item.label,
                value: item.value,
              }))}
            />
            <Input
              type="number"
              placeholder="Phone Number"
              value={phoneNumber ? phoneNumber.toString() : ""}
              onChange={(e) => handleForMobile(e)}
            />
          </Space.Compact>

          <Button
            block
            size="middle"
            disabled={isDisable}
            onClick={() => {
              setIsPersonalModelOpen(true);
              setIsModalOpen(false);
            }}
          >
            Send OTP
          </Button>
        </Space>
      </Modal>
      {/* personal details popup */}
      <PersonalDetailsPopUp
        PhoneNumber={phoneNumber}
        isPersonalModelOpen={isPersonalModelOpen}
        setIsPersonalModelOpen={setIsPersonalModelOpen}
      />
    </section>
  );
}

export default Login;
