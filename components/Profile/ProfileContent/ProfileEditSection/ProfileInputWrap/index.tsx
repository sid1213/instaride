"use client";
import { Button, Col, Row } from "antd";
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
    <Row className={Style.profile_input_wrap}>
      <Col span={24} className={Style.field_header}>
        <span>{labelName}</span>
        <Button
          onClick={() => handleEdit(labelName)}
          className={Style.edit_btn}
        >
          {!isEdit ? "Edit" : "Cancel"}
        </Button>
      </Col>
      {!isEdit && <p>{value}</p>}

      {isEdit && (
        <Col span={24} className={Style.profile_input_edit}>
          <Button
            className={Style.save_btn}
            onClick={() => handleSave(labelName)}
          >
            Save
          </Button>
        </Col>
      )}
    </Row>
  );
}

export default ProfileInputWrap;
