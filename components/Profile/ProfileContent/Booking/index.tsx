import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Style from "./style.module.scss";
import { Typography } from "antd";
import NotFound from "./NotFound";

const { Title, Paragraph } = Typography;
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Confirmed",
    children: <NotFound />,
  },
  {
    key: "2",
    label: "Pending",
    children: <NotFound />,
  },
  {
    key: "3",
    label: "Cancelled",
    children: <NotFound />,
  },
];
function Booking() {
  return (
    <section className={Style.booking}>
      <div className="header">
        <Title level={5}>Bookings</Title>
        <Paragraph>Manage your bookings</Paragraph>
      </div>

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </section>
  );
}

export default Booking;
