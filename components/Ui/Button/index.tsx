import React, { Children } from "react";
import Style from "./index.module.scss";

interface PropType {
  title: string;
  type?: string;
  size?: number;
}

const Button: React.FC<PropType> = ({ title, type, size }) => {
  return (
    <button className={Style.button} style={{ width: "100%" }}>
      {title}
    </button>
  );
};

export default Button;
