import React from "react";
import classNames from "classnames";
import Style from "./index.module.scss";

interface List {
  title: string;
  body: string;
}
interface TableListType {
  size: "small" | "medium" | "large";
  textSize?: "normal" | "bold" | "bolder";
  width?: number;
  color?: string;
  list: List[];
}
const TableList: React.FC<TableListType> = ({
  size,
  width,
  color,
  list,
  textSize,
}) => {
  return (
    <ul
      className={classNames(Style.labelList, [size])}
      style={{
        width: `${width ? width : 100}%`,
        color: `${color ? color : "black"}`,
        fontWeight:
          textSize === "normal"
            ? 300
            : textSize === "bold"
            ? 500
            : textSize === "bolder"
            ? 700
            : 300,
      }}
    >
      {list &&
        list.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <li>{item.title}</li>
              <li>{item.body}</li>
            </React.Fragment>
          );
        })}
    </ul>
  );
};

export default TableList;
