import React from "react";
import Style from "./style.module.scss";
import { Typography } from "antd";
import { AiOutlineLeft } from "react-icons/ai";

const { Title, Paragraph } = Typography;
interface PropsType {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function GoCoins({ setVisible }: PropsType) {
  return (
    <section className={Style.goCoins}>
      <div className="header">
        <div>
          <span
            className="left_arrow"
            onClick={() => {
              setVisible(false);
            }}
          >
            <AiOutlineLeft />
          </span>
        </div>
        <div>
          <Title level={5}>Coming Soon...</Title>
        </div>
      </div>
    </section>
  );
}

export default GoCoins;
