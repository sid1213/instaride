import React, { ReactElement } from "react";
import Style from "./index.module.scss";
import classNames from "classnames";

interface PropType {
  children: ReactElement;
  className?: string | undefined;
}

const ContainerMain: React.FC<PropType> = ({ children, className }) => {
  return (
    <div className={classNames(Style.container, className)}>{children}</div>
  );
};

export default ContainerMain;
