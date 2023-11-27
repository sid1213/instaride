"use client";
import React, { useState } from "react";
import { Checkbox, Divider, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import Title from "antd/es/typography/Title";
import Style from "./index.module.scss";

const Filter = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Space direction="vertical" className={Style.filter}>
      <Title level={5}>FILTER</Title>
      <Divider />

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
        <Checkbox>Gear</Checkbox>
        <Checkbox>Gearless</Checkbox>
      </Space>
      <Divider />
      <p>GO HUBS</p>
      <Space direction="vertical">
        <Checkbox>sector A indrapuri</Checkbox>
        <Checkbox>sector B indrapuri</Checkbox>
        <Checkbox>sector C indrapuri</Checkbox>
      </Space>
      <Divider />
      <p>BRANDS</p>
      <Space direction="vertical">
        <Checkbox>Honda</Checkbox>
        <Checkbox>Activa</Checkbox>
        <Checkbox>Royal</Checkbox>
      </Space>
    </Space>
  );
};

export default Filter;
