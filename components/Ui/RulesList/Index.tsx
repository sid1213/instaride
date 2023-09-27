import React from "react";
import Style from "./index.module.scss";
interface PropType {
  title: string;
  list: string[];
}
const RulesList: React.FC<PropType> = ({ title, list }) => {
  return (
    <div className={Style.list}>
      <p>{title}</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RulesList;
