import React from "react";
import Style from "./index.module.scss";
import VehicleSingle from "@/components/Vehicle/VehicleSingle";

const VehicleName = () => {
  return (
    <section className={Style.container}>
      <VehicleSingle />
    </section>
  );
};

export default VehicleName;
