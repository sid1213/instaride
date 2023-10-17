import React from "react";
import Style from "./style.module.scss";
import { Button, Form, Input, Typography } from "antd";
import { AiOutlineLeft } from "react-icons/ai";

const { Title, Paragraph } = Typography;
interface PropsType {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function GoCoins({ setVisible }: PropsType) {
  return <h1>Coming soon</h1>;
}

export default GoCoins;
