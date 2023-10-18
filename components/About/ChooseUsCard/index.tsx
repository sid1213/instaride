import React from "react";
import Style from "./index.module.scss";
import { Space } from "antd";
import { AiFillTrademarkCircle, AiOutlineDollar } from "react-icons/ai";
import { RiEBikeFill, RiCustomerService2Fill } from "react-icons/ri";
import { WhyChooseUs } from "@/types/index";

const ChooseUsCard: React.FC<WhyChooseUs> = ({
  icon,
  description,
  subtitle,
}) => {
  return (
    <Space className={Style.card} direction="vertical" align="center">
      <div>
        {icon === "Quality" ? (
          <RiEBikeFill />
        ) : icon === "Reservations" ? (
          <AiFillTrademarkCircle />
        ) : icon === "Service" ? (
          <RiCustomerService2Fill />
        ) : icon === "Rates" ? (
          <AiOutlineDollar />
        ) : (
          ""
        )}
      </div>
      <div>
        <p className={Style.subTitle}>{subtitle}</p>
        <p className={Style.content}>{description}</p>
      </div>
    </Space>
  );
};

export default ChooseUsCard;
