import React from "react";
import {
  Collapse,
  CollapseProps,
  Divider,
  Form,
  Input,
  Radio,
  Space,
  Tag,
} from "antd";

import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

import TableList from "@/components/Ui/TableList";
import Button from "@/components/Ui/Button";
import Title from "antd/es/typography/Title";
import Style from "./index.module.scss";

const listItem = [
  {
    title: "hello",
    body: "hii",
  },
  {
    title: "hello",
    body: "hii",
  },
  {
    title: "hello",
    body: "hii",
  },
];
const listItemHead = [
  {
    title: "hello",
    body: "hii",
  },
];

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <TableList size="medium" list={listItemHead} />,
    children: (
      <TableList size="small" width={50} color="#717171" list={listItemHead} />
    ),
  },
];

const BookNowFrom = () => {
  return (
    <div>
      <Title level={4}> Honda Activa</Title>

      <Form
        name="basic"
        layout="vertical"
        title=" Honda Activa"
        className={Style.form}
      >
        <Form.Item label="Select Package" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Payment Option" name="password">
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={1}>
                Pay now <span>hello</span>
              </Radio>
              <Radio value={2}>
                Pay at Pickup <span>hello</span>
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Fare Details">
          <Collapse
            ghost
            items={items}
            expandIcon={(status) => {
              return !status.isActive ? (
                <AiOutlinePlusSquare />
              ) : (
                <AiOutlineMinusSquare />
              );
            }}
            className={Style.collapse}
            collapsible={"icon"}
          />
          <Divider className={Style.divider} />
          <TableList size="medium" list={listItem} />
          <Divider className={Style.divider} />
          <TableList size="medium" textSize="bold" list={listItemHead} />
          <Tag color="success" className={Style.formTag}>
            Refundable Deposit - ₹ 2000 (To be paid at the time of pickup)
          </Tag>
        </Form.Item>
        <Form.Item className={Style.bookNowButtonMain}>
          <div className={Style.bookNowButtonBig}>
            <Button title="Book now" size="large" fit={100} htmlType="submit" />
          </div>
          <Space className={Style.bookNowButton} align="center">
            <Title level={4}>$82947</Title>
            <Button
              title="Book now"
              fit={"fit"}
              htmlType="submit"
              size="medium"
            />
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookNowFrom;
