import React from "react";
import { Collapse, CollapseProps, Divider, Form, Select, Space } from "antd";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import TableList from "@/components/Ui/TableList";
import Button from "@/components/Ui/Button";
import Style from "./index.module.scss";
import Title from "antd/es/typography/Title";

const listItem = [
  {
    title: "Total Payment Amount",
    body: "₹ 449.00",
  },
  {
    title: "Refundable Deposit",
    body: "₹ 1000.00",
  },
];

const listItemHead = [
  {
    title: " Rent Amount",
    body: "₹ 449.00",
  },
];

const listItemBody = [
  {
    title: "Daily Package",
    body: "1 unit(s) * 1 Weekday * ₹ 449.00 = ₹ 449.00",
  },
];

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <TableList size="medium" list={listItemHead} />,
    children: (
      <TableList size="small" width={100} color="#717171" list={listItemBody} />
    ),
  },
];
type FareProps = {
  isPartial: boolean;
};
function FareDetails({ isPartial }: FareProps) {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Form
        name="basic"
        layout="vertical"
        title="Checkout"
        className={Style.form}
      >
        <Form.Item label="Apply Coupon" name="username">
          <Select
            defaultValue="lucy"
            style={{ width: "100%" }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Fare Details" className={Style.fare_details}>
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
          {isPartial && (
            <>
              <TableList size="medium" textSize="normal" list={listItem} />
              <Divider className={Style.divider} />
            </>
          )}

          <TableList size="medium" textSize="bold" list={listItem} />
        </Form.Item>

        <Form.Item className={Style.bookNowButtonMain}>
          <div className={Style.bookNowButtonBig}>
            <Button title="Pay now" size="medium" fit={100} htmlType="submit" />
          </div>
          <Space className={Style.bookNowButton} align="center">
            <Title level={4}>$82947</Title>
            <Button
              title="Pay Now"
              fit={"fit"}
              htmlType="submit"
              size="medium"
            />
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FareDetails;
