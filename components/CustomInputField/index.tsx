import Style from "./style.module.scss";
import { Input } from "antd";
interface PropsType {
  labelName: string;
  inputType: string;
  Width: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomInputField = ({
  labelName,
  inputType,
  Width,
  value,
  setValue,
}: PropsType) => {
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  return (
    <div className={Style.custom_input_field} style={{ width: Width }}>
      <label>{labelName}</label>
      <Input type={inputType} value={value} onChange={(e) => handleChange(e)} />
    </div>
  );
};
