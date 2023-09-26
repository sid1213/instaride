import Style from "./style.module.scss";
import { Input } from "antd";
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
    <div className={Style.custom_input_field} style={{ width: Width }}>
      <label>{labelName}</label>
      <Input type={inputType} />
    </div>
  );
};
