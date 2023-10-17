import Style from "./style.module.scss";
import { Form, Input } from "antd";
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
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={Style.custom_form}
    >
      <Form.Item
        label={labelName}
        name={labelName}
        rules={[{ message: "Enter firstName!" }]}
        className={Style.custom_item}
      >
        <Input
          className={Style.custom_input}
          type={inputType}
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </Form.Item>
      <Form.Item
        label={labelName}
        name={labelName}
        rules={[{ message: "Enter firstName!" }]}
        className={Style.custom_item}
      >
        <Input
          className={Style.custom_input}
          type={inputType}
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </Form.Item>
    </Form>
  );
};
