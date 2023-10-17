"use client";
import React, { useState } from "react";
import {
  Checkbox,
  Col,
  Divider,
  Drawer,
  FloatButton,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
} from "antd";
import { BsFilterCircle } from "react-icons/bs";
import { IoLocateOutline } from "react-icons/io5";
import Style from "./index.module.scss";

const MobileFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isHubOpen, setIsHubOpen] = useState<boolean>(false);
  const handleFilterDrawer = () => {
    setIsFilterOpen(true);
  };
  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };
  const handleHubDrawer = () => {
    setIsHubOpen(true);
  };
  const handleHubClose = () => {
    setIsHubOpen(false);
  };
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <FloatButton.Group shape="square" className={Style.floatButton}>
      <FloatButton
        icon={
          <Row gutter={10} justify={"center"} wrap={false}>
            <Col>
              <BsFilterCircle />
            </Col>
            <Col>Filter</Col>
          </Row>
        }
        onClick={handleFilterDrawer}
      />

      <Divider orientation="center" type="vertical" />
      <FloatButton
        icon={
          <Row gutter={10} justify={"center"} wrap={false}>
            <Col>
              <IoLocateOutline />
            </Col>
            <Col>Hub</Col>
          </Row>
        }
        onClick={handleHubDrawer}
      />
      <Drawer
        title={<p>Filter</p>}
        placement={"bottom"}
        width={1000}
        onClose={handleFilterClose}
        open={isFilterOpen}
        rootClassName={Style.drawer}
      >
        <p>BOOKING DURATION</p>

        <Radio.Group onChange={onChange} value={value} className="primary">
          <Space direction="vertical">
            <Radio value={1}>Daily Package</Radio>
            <Radio value={2}>Weekly Package</Radio>
            <Radio value={3}>15 Days Package</Radio>
            <Radio value={4}>Monthly Package</Radio>
          </Space>
        </Radio.Group>
        <Divider />
        <p>TRANSMISSION TYPE</p>
        <Space direction="vertical">
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="A">A</Checkbox>
        </Space>
        <Divider />
        <p>BRANDS</p>
        <Space direction="vertical">
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="A">A</Checkbox>
        </Space>
      </Drawer>
      <Drawer
        title={<p>Hubs</p>}
        placement={"bottom"}
        width={1000}
        onClose={handleHubClose}
        open={isHubOpen}
        rootClassName={Style.drawer}
      >
        <Space direction="vertical">
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="A">A</Checkbox>
        </Space>
      </Drawer>
    </FloatButton.Group>
  );
};

export default MobileFilter;
