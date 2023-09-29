import React from "react";
import { Col, Row, Space, Tabs } from "antd";
import type { TabsProps } from "antd";
import Style from "./style.module.scss";
import { Typography } from "antd";
import NotFound from "./NotFound";
import { AiOutlineLeft } from "react-icons/ai";

const { Title, Text } = Typography;
const onChange = (key: string) => {
  console.log(key);
};
interface PropsType {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

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
function Booking({ setVisible }: PropsType) {
  return (
    <Row className={Style.booking}>
      {/* Booking header */}
      <Space className={Style.booking_header}>
        <Col className={Style.left_arrow} onClick={() => setVisible(false)}>
          <AiOutlineLeft />
        </Col>

        <Col className={Style.heading}>
          <Title level={5}>Bookings</Title>
          <Text>Manage your bookings</Text>
        </Col>
      </Space>

      {/* Booking Tab */}
      <Col span={24}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Col>
    </Row>
  );
}

export default Booking;
