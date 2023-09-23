import React from "react";
import classNames from "classnames";
import Style from "./index.module.scss";

interface List {
  title: string;
  body: string;
}
interface TableListType {
  size: "small" | "medium" | "large";
  width?: number;
  color?: string;
  list: List[];
}
const TableList: React.FC<TableListType> = ({ size, width, color, list }) => {
  return (
    <ul
      className={classNames(Style.labelList, [size])}
      style={{
        width: `${width ? width : 100}%`,
        color: `${color ? color : "black"}`,
      }}
    >
      {list &&
        list.map((item) => {
          return (
            <>
              <li>{item.title}</li>
              <li>{item.body}</li>
            </>
          );
        })}
    </ul>
  );
};

export default TableList;
