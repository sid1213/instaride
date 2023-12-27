import React from "react";
import {
  Col,
  Collapse,
  CollapseProps,
  Divider,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Tag,
} from "antd";

import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import Link from "next/link";
import TableList from "@/components/Ui/TableList";
import Button from "@/components/Ui/Button";
import Title from "antd/es/typography/Title";
import Style from "./index.module.scss";
import { useRouter } from "next/navigation";

const listItem = [
  {
    title: "Total",
    body: "2000",
  },
  {
    title: "Advance Payment",
    body: "1000",
  },
  {
    title: "Remaining Rent",
    body: "1000",
  },
];
const options = [
  { value: "Daily packages", label: "Per day" },
  { value: "Weekly Package", label: "weekly" },
  { value: "Monthly", label: "Monthly" },
];
const listItemHead = [
  {
    title: "Rent Amount",
    body: "2000",
  },
];
const listItemBody = [
  {
    title: "Daily Package",
    body: "200 * 10",
  },
];

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <TableList size="medium" list={listItemHead} />,
    children: (
      <TableList size="small" width={50} color="#717171" list={listItemBody} />
    ),
  },
];

const BookNowFrom = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const handleSubmit = () => {
    router.push(`/checkout`);
  };
  return (
    <div>
      <Title level={4}> Honda Activa</Title>

      <Form
        name="basic"
        layout="vertical"
        title="Honda Activa"
        className={Style.form}
        form={form}
        onFinish={handleSubmit}
      >
        <Form.Item label="Select Package" name="username">
          <Col className={Style.select_box}>
            <Select options={options} />
          </Col>
        </Form.Item>

        <Form.Item label="Payment Option" name="password">
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={1}>
                Pay now <span>2000</span>
              </Radio>
              <Radio value={2}>
                Pay at Pickup <span>2000</span>
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
            <Link href={"/checkout"}>
              <Button
                title="Book now"
                fit={"fit"}
                htmlType="submit"
                size="medium"
              />
            </Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookNowFrom;
