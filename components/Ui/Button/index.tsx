import React, { ReactNode } from "react";
import Style from "./index.module.scss";
import { Button as Btn, ConfigProvider } from "antd";

interface PropType {
  title: ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  fit?: number | "fit";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<PropType> = ({ title, htmlType, fit, size }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#99cc33",
            borderRadius: 5,

            // Alias Token
            colorBgContainer: "#f6ffed",
          },
        }}
      >
        <Btn
          type="primary"
          htmlType={htmlType ? htmlType : "button"}
          className={Style.button}
          style={{
            width: fit
              ? fit === "fit"
                ? "fit-content"
                : typeof fit === "number"
                ? `${fit}%`
                : "100%"
              : "fit-content",
            // padding: size
            // ? size === "large"
            // ? " 1.5rem 2.5rem"
            // : size === "medium"
            // ? " 1rem 2rem"
            // size === "small"
            // ? " 0.5rem 1rem"
            // : " 0.5rem 1rem"
            // : "0.5rem 1rem",
            fontSize: size
              ? size === "large"
                ? " 1.6rem"
                : size === "medium"
                ? " 1.4rem"
                : size === "small"
                ? " 1.2rem"
                : "1.2rem"
              : "1.2rem",
            fontWeight: size
              ? size === "large"
                ? " 600"
                : size === "medium"
                ? " 500"
                : size === "small"
                ? " 400"
                : "400"
              : "400",
          }}
        >
          {title}
        </Btn>
      </ConfigProvider>
    </>
  );
};

export default Button;
