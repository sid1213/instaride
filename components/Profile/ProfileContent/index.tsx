import React from "react";
import Style from "./style.module.scss";
import { Button, Input, Typography } from "antd";

const { Title, Paragraph } = Typography;

function ProfileContent() {
  return (
    <div className={Style.profile_content}>
      <div className="profile_details_header">
        <Title level={5}>Profile</Title>
        <Paragraph>Basic Details</Paragraph>
      </div>
      <div className="profile_edit_section">
        {/* for name */}
        <div className="profile_input_wrap">
          <div className="label_btn">
            <label>Name</label>
            <Button>edit</Button>
          </div>

          <p>Jagrati Gupta</p>

          <div className="profile_input_edit">
            <div className="input_container">
              <CustomInputField
                labelName={"FirstName"}
                inputType={"text"}
                Width={"50%"}
              />
              <CustomInputField
                labelName={"LastName"}
                inputType={"text"}
                Width={"50%"}
              />
            </div>
            <Button className="save_btn">Save</Button>
          </div>
        </div>

        {/* for email */}
        <div className="profile_input_wrap">
          <div className="label_btn">
            <label>Email</label>
            <Button>edit</Button>
          </div>

          <p>jagrati@gmail.com</p>

          <div className="profile_input_edit">
            <div className="input_container">
              <CustomInputField
                labelName={"Email Id"}
                inputType={"email"}
                Width={"100%"}
              />
            </div>
            <Button className="save_btn">Save</Button>
          </div>
        </div>

        {/* for mobile */}
        <div className="profile_input_wrap">
          <div className="label_btn">
            <label>Mobile</label>
            <Button>edit</Button>
          </div>

          <p> +91 00000000</p>
        </div>

        {/* edit for address */}
        <div className="profile_input_wrap">
          <div className="label_btn">
            <label>Address</label>
            <Button>edit</Button>
          </div>

          <p>Not Provided</p>

          <div className="profile_input_edit">
            <div className="input_container">
              <CustomInputField
                labelName={"Address"}
                inputType={"text"}
                Width={"100%"}
              />
            </div>
            <Button className="save_btn">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;

interface PropsType {
  labelName: string;
  inputType: string;
  Width: string;
}

export const CustomInputField = ({
  labelName,
  inputType,
  Width,
}: PropsType) => {
  return (
    <div className="custom_input_field" style={{ width: Width }}>
      <label>{labelName}</label>
      <Input type={inputType} />
    </div>
  );
};
