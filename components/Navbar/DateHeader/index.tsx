"use client";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Form, DatePicker, Col, Row } from "antd";
import Style from "./index.module.scss";
import { useForm } from "antd/es/form/Form";
import classNames from "classnames";
import Button from "@/components/Ui/Button";
import MobileDateHeader from "./MobileDateHeader";

interface FormValues {
  startDate: Dayjs;
  endDate: Dayjs;
}

function DateHeader() {
  const [form] = useForm();
  const startDate = Form.useWatch<Dayjs>("startDate", form);
  const endDate = Form.useWatch<Dayjs>("endDate", form);
  const currentHour = dayjs().add(1, "hour").hour();
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

  const handleStartChange = (values: Dayjs) => {
    setIsStartDateToday(dayjs().isBefore(values, "day"));
    form.setFieldValue("endDate", "");
    setIsEndDateToday(true);
  };
  const handleEndChange = (values: Dayjs) => {
    setIsEndDateToday(startDate.isSame(values, "date"));
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values.startDate);
  };

  return (
    <>
      <div className={Style.dateHeader_container}>
        <Form
          layout="horizontal"
          name="date-selecting"
          form={form}
          onFinish={handleSubmit}
          initialValues={{
            startDate: dayjs().add(1, "hour"),
            endDate: dayjs().add(1, "day").add(1, "hour"),
          }}
        >
          <Row gutter={[9, 2]} align={"middle"}>
            <Col span={24} md={24} lg={10} xl={10}>
              <Form.Item
                name="startDate"
                rules={[
                  { required: true, message: "Please select Start Date" },
                ]}
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
                  format="MMMM DD, YYYY HH:00 A"
                  className={classNames(Style.input, Style.greenIcon)}
                  showNow={false}
                  allowClear={false}
                />
              </Form.Item>
            </Col>
            <Col span={24} md={24} lg={10} xl={10}>
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
                        if (
                          value.isBefore(startDate) ||
                          value.isSame(startDate)
                        ) {
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
                    disabledHours: isEndDateToday
                      ? disabledEndDateHours
                      : undefined,
                  }}
                  disabledDate={(date) => {
                    return date && date.isBefore(startDate, "day");
                  }}
                  onSelect={handleEndChange}
                  format="MMMM DD, YYYY HH:00 A"
                  className={classNames(Style.input, Style.redIcon)}
                  showNow={false}
                  allowClear={false}
                />
              </Form.Item>
            </Col>
            <Col span={24} md={24} lg={4} xl={4}>
              <Form.Item>
                <Button
                  title={"Search"}
                  fit={100}
                  size="large"
                  htmlType="submit"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div className={Style.mobile_header}>
        <MobileDateHeader />
      </div>
    </>
  );
}

export default DateHeader;
