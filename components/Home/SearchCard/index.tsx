"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, DatePicker, Form, Row, Select, Typography } from "antd";
import Style from "./index.module.scss";
import classNames from "classnames";
import dayjs, { Dayjs } from "dayjs";
import Button from "@/components/Ui/Button";
import { useRouter } from "next/navigation";
interface FormValues {
  place: string;
  startDate: Dayjs;
  endDate: Dayjs;
}

const { Title, Text } = Typography;

const SearchCard = () => {
  const currentHour = dayjs().add(1, "hour").hour();
  const [form] = Form.useForm<FormValues>();
  const startDate = Form.useWatch<Dayjs>("startDate", form);
  const endDate = Form.useWatch<Dayjs>("endDate", form);
  const [isStartDateToday, setIsStartDateToday] = useState<boolean>(false);
  const [isEndDateToday, setIsEndDateToday] = useState<boolean>(false);
  const router = useRouter();

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
    router.push(`${values.place}/`);
  };

  const handleStartChange = (values: Dayjs) => {
    setIsStartDateToday(dayjs().isBefore(values, "day"));
    form.setFieldValue("endDate", "");
    setIsEndDateToday(true);
  };
  const handleEndChange = (values: Dayjs) => {
    setIsEndDateToday(startDate.isSame(values, "date"));
  };

  useEffect(() => {}, [startDate, endDate, currentHour, form]);

  return (
    <Card className={Style.card}>
      <Title level={4}>Commuting Made Easy, Affordable and Quick</Title>
      <Text>Scooter/Scooty/Bike on Rent in Bhopal</Text>
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
          label={"Pickup Location"}
          rules={[
            {
              required: true,
              message: "Please select Place",
            },
          ]}
          className="primary bordered"
        >
          <Select
            className={Style.select}
            options={[
              { value: "Bhopal", label: "Bhopal" },
              { value: "Delhi", label: "Delhi" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="startDate"
          rules={[{ required: true, message: "Please select Start Date" }]}
          label={"Pickup Date & Time"}
          className="primary bordered"
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
          label={"Dropoff Date & Time"}
          className="primary bordered"
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
          <Row justify={"space-between"} align={"middle"}>
            <Col>
              <Text>
                {startDate &&
                  endDate &&
                  `Duration: ${
                    endDate.diff(startDate, "day") > 0
                      ? `${endDate.diff(startDate, "day")} Day`
                      : ""
                  }  ${
                    endDate.diff(startDate, "hour") % 24 > 0
                      ? `${endDate.diff(startDate, "hour") % 24} hour`
                      : ""
                  } `}
              </Text>
            </Col>
            <Col>
              <Button
                title={"Submit"}
                fit="fit"
                size="medium"
                htmlType="submit"
              />
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SearchCard;
