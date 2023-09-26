import { Button } from "antd";
import React from "react";
import { CustomInputField } from "@/components/CustomInputField";
import Style from "./style.module.scss";
interface PropsType {
  labelName: string;
  inputLabel: string;
  inputType: string;
}

function ProfileInputWrap({ labelName, inputLabel, inputType }: PropsType) {
  return (
    <div className={Style.profile_input_wrap}>
      <div className="label_btn">
        <label>{labelName}</label>
        <Button>edit</Button>
      </div>

      <p>Jagrati Gupta</p>

      <div className="profile_input_edit">
        <div className="input_container">
          <CustomInputField
            labelName={inputLabel}
            inputType={inputType}
            Width={"100%"}
          />
        </div>
        <Button className="save_btn">Save</Button>
      </div>
    </div>
  );
}

export default ProfileInputWrap;
