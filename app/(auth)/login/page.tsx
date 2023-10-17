"use client";
import React, { useState } from "react";
import Style from "./style.module.scss";
import { Select, Input, Modal, Space, Button } from "antd";
import Image from "next/image";
import Title from "antd/es/typography/Title";
import PersonalDetailsModal from "@/components/Login/PersonalDetailsModal";
import OtpModal from "@/components/Login/OtpModal";

function Login() {
  // for phone number
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [phoneNumber, setPhoneNumber] = useState<number | null>(null);
  const [isDisable, setIsDisable] = useState<boolean>(true);

  // for personal details
  const [isPersonalModelOpen, setIsPersonalModelOpen] =
    useState<boolean>(false);

  // for otp
  const [isOtpModalOpen, setIsOtpModalOpen] = useState<boolean>(false);

  // check is new PhoneNumber added or not
  const [isNewNumber, setIsNewNumber] = useState<boolean>(true);

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

  const showLoginModel = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleForDisableButton = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      {/* login popup */}
      <Modal
        title=""
        open={isModalOpen}
        onCancel={handleCancel}
        className={Style.login_popup}
        centered
        footer={false}
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
              onChange={(e) => handleForDisableButton(e)}
            />
          </Space.Compact>

          <Button
            block
            size="middle"
            disabled={isDisable}
            onClick={() => {
              isNewNumber
                ? setIsPersonalModelOpen(true)
                : setIsOtpModalOpen(true);
              setIsModalOpen(false);
            }}
          >
            Send OTP
          </Button>
        </Space>
      </Modal>

      {/* personal details popup */}
      <PersonalDetailsModal
        PhoneNumber={phoneNumber}
        isPersonalModelOpen={isPersonalModelOpen}
        setIsPersonalModelOpen={setIsPersonalModelOpen}
        setIsOtpModalOpen={setIsOtpModalOpen}
      />

      {/* Otp popup */}
      <OtpModal
        PhoneNumber={phoneNumber}
        isOtpModalOpen={isOtpModalOpen}
        setIsOtpModalOpen={setIsOtpModalOpen}
      />
    </section>
  );
}

export default Login;
