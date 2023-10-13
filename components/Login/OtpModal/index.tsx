"use client ";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Button, Modal, Space } from "antd";
import Style from "./index.module.scss";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

type OtpPropsType = {
  PhoneNumber: number | null;
  isOtpModalOpen: boolean;
  setIsOtpModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function OtpModal({
  PhoneNumber,
  isOtpModalOpen,
  setIsOtpModalOpen,
}: OtpPropsType) {
  const [otp, setOtp] = useState<string>("");
  const handleCancel = () => setIsOtpModalOpen(false);
  const handleOtpSubmit = () => {
    setIsOtpModalOpen(false);
    setOtp("");
  };

  return (
    <>
      <Modal
        title=""
        open={isOtpModalOpen}
        onCancel={handleCancel}
        centered
        footer={false}
        className={Style.otpModal}
      >
        <Space direction="vertical" align="center">
          <Title level={4}>
            Enter OTP sent to <span>(+91) {PhoneNumber}</span>
          </Title>
          <Paragraph className="pera">
            Verification of your number is required so we can contact you about
            any information
          </Paragraph>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
            inputType="number"
            containerStyle={{
              color: "green",
              justifyContent: "space-evenly",
              width: "90%",
              margin: "auto 2rem",
            }}
            inputStyle={{
              width: "4rem",
              height: "4rem",
            }}
          />
          <Button
            size="large"
            block
            onClick={handleOtpSubmit}
            disabled={otp.length !== 4 ? true : false}
          >
            Submit
          </Button>
        </Space>
      </Modal>
    </>
  );
}

export default OtpModal;
