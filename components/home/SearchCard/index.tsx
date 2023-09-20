import React from "react";
import { Card, DatePicker, Form, Select } from "antd";
import Style from "./index.module.scss";
import classNames from "classnames";
import dayjs from "dayjs";

const SearchCard = () => {
  const currentHour = dayjs().hour();
  const currentMinute = dayjs().minute();

  const disabledHours = (): number[] => {
    return [...Array(currentHour).keys()];
  };

  const disabledMinutes = (selectedHour: number): number[] => {
    if (selectedHour === currentHour) {
      return [...Array(currentMinute).keys()];
    }
    return [];
  };

  return (
    <Card title="hello">
      <Form
        name="trigger"
        layout="vertical"
        initialValues={{
          place: "Jack",
        }}
      >
        <Form.Item name="place" validateTrigger="onBlur">
          <Select
            className={Style.select}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Form.Item>

        <Form.Item name="startDate">
          <DatePicker
            showTime={{
              format: "HH:00",
              disabledHours: disabledHours,
              disabledMinutes: disabledMinutes,
            }}
            format="MMMM DD, YYYY HH:00"
            className={classNames(Style.input, Style.greenIcon)}
            showNow={false}
          />
        </Form.Item>

        <Form.Item name="endDate" validateFirst>
          <DatePicker
            disabledDate={(date) => {
              return date && date < dayjs();
            }}
            showTime={{
              format: "HH:00",
              disabledHours: disabledHours,
              disabledMinutes: disabledMinutes,
            }}
            format="MMMM DD, YYYY HH:00"
            className={classNames(Style.input, Style.redIcon)}
            showNow={false}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SearchCard;
