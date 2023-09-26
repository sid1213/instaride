"use client";
import React, { useState } from "react";
import Style from "./style.module.scss";
import { Typography } from "antd";
import ProfileInputWrap from "@/components/Profile/ProfileContent/ProfileInputWrap";

const { Title, Paragraph } = Typography;
function ProfileEditSection() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleEdit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log("edit");
  };
  return (
    <section className={Style.profile_edit_section}>
      <div className="profile_details_header">
        <Title level={5}>Profile</Title>
        <Paragraph>Basic Details</Paragraph>
      </div>

      <div className="profile_details_body">
        {/* for name */}
        <ProfileInputWrap
          labelName={"Name"}
          inputLabel={"Name"}
          inputType={"text"}
        />

        {/* for email */}
        <ProfileInputWrap
          labelName={"Email"}
          inputLabel={"Email Id"}
          inputType={"email"}
        />

        {/* for mobile */}
        <div className="profile_input_wrap">
          <label>Mobile</label>
          <p> +91 00000000</p>
        </div>

        {/* edit for address */}
        <ProfileInputWrap
          labelName={"Address"}
          inputLabel={"Address"}
          inputType={"text"}
        />
      </div>
    </section>
  );
}

export default ProfileEditSection;
