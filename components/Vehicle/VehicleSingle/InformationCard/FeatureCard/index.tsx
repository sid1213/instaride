import React from "react";
import Style from "./index.module.scss";
import { Space, Tooltip } from "antd";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaIndianRupeeSign, FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { MdOutlineTimerOff, MdSpeed } from "react-icons/md";
import { RiMapPinTimeLine } from "react-icons/ri";

import { ThingsToRemember } from "@/types/index";

const FeatureCard: React.FC<ThingsToRemember> = ({
  icon,
  description,
  subtitle,
}) => {
  const text = icon.split(/(?=[A-Z])/);
  return (
    <Space className={Style.card} direction="vertical" align="center">
      <div>
        {icon === "SecurityDeposit" ? (
          <FaIndianRupeeSign />
        ) : icon === "LocationTimings" ? (
          <RiMapPinTimeLine />
        ) : icon === "DistanceLimit" ? (
          <GiPathDistance />
        ) : icon === "ExcessCharge" ? (
          <FaMoneyBillTrendUp />
        ) : icon === "LatePenalty" ? (
          <MdOutlineTimerOff />
        ) : (
          icon === "SpeedLimit" && <MdSpeed />
        )}
      </div>
      <div>
        <div className={Style.title}>
          <p>{text[0] + " " + text[1]}</p>
          <span className={Style.subTitle}>{subtitle}</span>
        </div>
        <p className={Style.content}>{description}</p>
      </div>

      <Tooltip
        placement="top"
        title={description}
        trigger={"hover"}
        className={Style.tooltip}
        overlayInnerStyle={{ fontSize: "1.2rem" }}
      >
        <AiOutlineInfoCircle />
      </Tooltip>
    </Space>
  );
};

export default FeatureCard;
