import React from "react";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import FeatureCard from "@/components/Ui/FeatureCard";
import { PiEngine } from "react-icons/pi";
import { BikesFeatures } from "@/types/index";
import { GiSpeedometer } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";
import { RiToolsLine } from "react-icons/ri";
import { MdEventSeat, MdSpeed } from "react-icons/md";

const items: BikesFeatures[] = [
  {
    icon: "Displacement",
    subtitle: "60",
  },
  {
    icon: "FuelCapacity",
    subtitle: "60",
  },
  {
    icon: "KerbWeight",
    subtitle: "60",
  },

  {
    icon: "Mileage",
    subtitle: "60",
  },
  {
    icon: "Seats",
    subtitle: "60",
  },
  {
    icon: "TopSpeed",
    subtitle: "60",
  },
];

const BikeFeatures = () => {
  return (
    <div>
      <Title level={4}>Bike Features</Title>
      <Row justify={"space-between"}>
        {items.map((item) => (
          <Col key={item.icon} span={8} lg={4}>
            <FeatureCard
              icon={
                item.icon === "Displacement" ? (
                  <PiEngine />
                ) : item.icon === "KerbWeight" ? (
                  <RiToolsLine />
                ) : item.icon === "Seats" ? (
                  <MdEventSeat />
                ) : item.icon === "FuelCapacity" ? (
                  <LuFuel />
                ) : item.icon === "Mileage" ? (
                  <GiSpeedometer />
                ) : (
                  item.icon === "TopSpeed" && <MdSpeed />
                )
              }
              subTitle={item.subtitle}
              title={item.icon.split(/(?=[A-Z])/).join(" ")}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BikeFeatures;
