"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, DatePicker, Form, Select } from "antd";
import Style from "./index.module.scss";
import classNames from "classnames";
import dayjs, { Dayjs } from "dayjs";

interface FormValues {
  place: string;
  startDate: Dayjs;
  endDate: Dayjs;
}

const SearchCard = () => {
  const currentHour = dayjs().add(1, "hour").hour();

  const [form] = Form.useForm();
  const startDate = Form.useWatch("startDate", form);
  const endDate = Form.useWatch("endDate", form);

  const [isStartDateToday, setIsStartDateToday] = useState<boolean>(false);
  const [isEndDateToday, setIsEndDateToday] = useState<boolean>(false);

  const disabledStatDateHours = (): number[] => {
    return [...Array(!isStartDateToday ? currentHour : 0).keys()];
  };
  const disabledEndDateHours = (): number[] => {
    return [
      ...Array(isEndDateToday ? startDate.add(1, "hour").hour() : 0).keys(),
    ];
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values.startDate);
  };

  const handleStartChange = (values: any) => {
    setIsStartDateToday(dayjs().isBefore(values, "day"));
    form.setFieldValue("endDate", "");
    setIsEndDateToday(true);
  };
  const handleEndChange = (values: any) => {
    setIsEndDateToday(startDate.isSame(values, "date"));
  };

  useEffect(() => {}, [startDate, endDate, currentHour, form]);

  return (
    <Card className={Style.card}>
      <h1 className="heading-2 ">Commuting Made Easy, Affordable and Quick</h1>
      <p>Scooter/Scooty/Bike on Rent in Delhi</p>
      <Form
        name="trigger"
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        initialValues={{
          place: "Jack",
          startDate: dayjs().add(1, "hour"),
          endDate: dayjs().add(1, "day").add(1, "hour"),
        }}
        className={Style.form}
      >
        <Form.Item
          name="place"
          validateTrigger="onBlur"
          rules={[
            {
              required: true,
              message: "Please select Place",
            },
          ]}
        >
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

        <Form.Item
          name="startDate"
          rules={[{ required: true, message: "Please select Start Date" }]}
        >
          <DatePicker
            disabledDate={(date) => {
              return date && date.isBefore(dayjs(), "day");
            }}
            showTime={{
              format: "HH:00",
              disabledHours: !isStartDateToday
                ? disabledStatDateHours
                : undefined,
            }}
            onSelect={handleStartChange}
            format="MMMM DD, YYYY HH:00"
            className={classNames(Style.input, Style.greenIcon)}
            showNow={false}
            allowClear={false}
          />
        </Form.Item>

        <Form.Item
          name="endDate"
          rules={[
            {
              required: true,
              validator: (_, value) => {
                return new Promise((resolve, reject) => {
                  if (!value) {
                    return reject("Please select End Date and time");
                  }
                  if (value.isBefore(startDate) || value.isSame(startDate)) {
                    return reject(
                      `Please select time Greater than ${startDate.format(
                        "HH"
                      )}:00`
                    );
                  } else {
                    return resolve("");
                  }
                });
              },
            },
          ]}
        >
          <DatePicker
            showTime={{
              format: "HH:00",
              disabledHours: isEndDateToday ? disabledEndDateHours : undefined,
            }}
            disabledDate={(date) => {
              return date && date.isBefore(startDate, "day");
            }}
            onSelect={handleEndChange}
            format="MMMM DD, YYYY HH:00"
            className={classNames(Style.input, Style.redIcon)}
            showNow={false}
            allowClear={false}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={Style.submit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SearchCard;
