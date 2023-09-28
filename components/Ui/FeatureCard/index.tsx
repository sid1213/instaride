import React, { ReactNode } from "react";
import { Space, Typography } from "antd";
import Style from "./index.module.scss";

interface PropType {
  icon: ReactNode;
  title: string;
  subTitle: string;
}

const { Text } = Typography;
const FeatureCard: React.FC<PropType> = ({ icon, title, subTitle }) => {
  return (
    <Space className={Style.box}>
      <div className={Style.icon}>{icon}</div>
      <div>
        <div>
          <p>{title}</p>
        </div>
        <p className={Style.greenText}>{subTitle}</p>
      </div>
    </Space>
  );
};

export default FeatureCard;
