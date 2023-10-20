import { Col, Collapse, CollapseProps, DatePicker, Form, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import classNames from "classnames";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import Style from "./index.module.scss";
import Button from "@/components/Ui/Button";
import { CaretRightOutlined } from "@ant-design/icons";

interface FormValues {
  startDateMobile: Dayjs;
  endDateMobile: Dayjs;
}
function MobileDateHeader() {
  //State
  const [form] = useForm();
  const startDateMobile = Form.useWatch<Dayjs>("startDateMobile", form);
  const endDateMobile = Form.useWatch<Dayjs>("endDateMobile", form);
  const currentHour = dayjs().add(1, "hour").hour();
  const [isStartDateToday, setIsStartDateToday] = useState<boolean>(false);
  const [isEndDateToday, setIsEndDateToday] = useState<boolean>(false);

  const disabledStatDateHours = (): number[] => {
    return [...Array(!isStartDateToday ? currentHour : 0).keys()];
  };
  const disabledEndDateHours = (): number[] => {
    return [
      ...Array(
        isEndDateToday ? startDateMobile.add(1, "hour").hour() : 0
      ).keys(),
    ];
  };

  const handleStartChange = (values: Dayjs) => {
    setIsStartDateToday(dayjs().isBefore(values, "day"));
    form.setFieldValue("endDate", "");
    setIsEndDateToday(true);
  };
  const handleEndChange = (values: Dayjs) => {
    setIsEndDateToday(startDateMobile.isSame(values, "date"));
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values.startDateMobile);
  };
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <p>{`${startDateMobile?.format(
          "MMM DD,YYYY HH:00 A"
        )} - ${endDateMobile?.format("MMM DD,YYYY HH:00 A")}`}</p>
      ),
      children: (
        <Form
          layout="horizontal"
          name="mobile-date-selecting"
          form={form}
          onFinish={handleSubmit}
          initialValues={{
            startDateMobile: dayjs().add(1, "hour"),
            endDateMobile: dayjs().add(1, "day").add(1, "hour"),
          }}
          className={Style.form}
        >
          <Row gutter={[9, 2]} align={"middle"}>
            <Col span={24}>
              <Form.Item
                name="startDateMobile"
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
            <Col span={24}>
              <Form.Item
                name="endDateMobile"
                rules={[
                  {
                    required: true,
                    validator: (_, value) => {
                      return new Promise((resolve, reject) => {
                        if (!value) {
                          return reject("Please select End Date and time");
                        }
                        if (
                          value.isBefore(startDateMobile) ||
                          value.isSame(startDateMobile)
                        ) {
                          return reject(
                            `Please select time Greater than ${startDateMobile.format(
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
                    return date && date.isBefore(startDateMobile, "day");
                  }}
                  onSelect={handleEndChange}
                  format="MMMM DD, YYYY HH:00 A"
                  className={classNames(Style.input, Style.redIcon)}
                  showNow={false}
                  allowClear={false}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button
                  title={"search"}
                  fit={100}
                  size="large"
                  htmlType="submit"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      ),
    },
  ];

  return (
    <>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 270} />
        )}
        items={items}
      />
    </>
  );
}

export default MobileDateHeader;
