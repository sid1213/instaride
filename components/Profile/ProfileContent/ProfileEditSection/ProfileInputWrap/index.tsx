"use client";
import { Button } from "antd";
import React, { useState } from "react";
import { CustomInputField } from "@/components/CustomInputField";
import Style from "./style.module.scss";
interface PropsType {
  labelName: string;
  inputLabel: string;
  inputType: string;
  inputValue: string;
}

function ProfileInputWrap({
  labelName,
  inputLabel,
  inputType,
  inputValue,
}: PropsType) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(inputValue);

  const handleEdit = (labelName: string) => {
    if (labelName) {
      setIsEdit(!isEdit);
    }
  };
  const handleSave = (labelName: string) => {
    if (labelName) {
      setIsEdit(!isEdit);
    }
  };
  return (
    <div className={Style.profile_input_wrap}>
      <div className="label_btn">
        <label>{labelName}</label>
        <Button onClick={() => handleEdit(labelName)}>
          {!isEdit ? "Edit" : "Cancel"}
        </Button>
      </div>
      {!isEdit && <p>{value}</p>}

      {isEdit && (
        <div className="profile_input_edit">
          <div className="input_container">
            <CustomInputField
              labelName={inputLabel}
              inputType={inputType}
              Width={"100%"}
              value={value}
              setValue={setValue}
            />
          </div>
          <Button className="save_btn" onClick={() => handleSave(labelName)}>
            Save
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProfileInputWrap;
