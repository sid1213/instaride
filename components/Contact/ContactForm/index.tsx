"use client";
import React, { useEffect, useState } from "react";
import Style from "./index.module.scss";
import { Form, Input, Button } from "antd";
import Title from "antd/es/typography/Title";
import ReCAPTCHA from "react-google-recaptcha";
const { TextArea } = Input;
function ContactForm() {
  // state
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);

  const onFinish = (values: any) => console.log("Success:", values);
  const onFinishFailed = (errorInfo: any) => console.log("Failed:", errorInfo);
  const onChange = (value: any) => setVerified(true);

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);

  return (
    <section className={Style.form_container}>
      <Form
        form={form}
        name="contact"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item>
          <Title level={2}>We're here for you</Title>
        </Form.Item>

        {/* name */}
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Name*" />
        </Form.Item>

        {/* email */}
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="email" placeholder="Email*" />
        </Form.Item>

        {/* number */}
        <Form.Item
          name="number"
          rules={[{ required: true, message: "Please input your number!" }]}
        >
          <Input placeholder="Mobile*" />
        </Form.Item>

        {/* message */}
        <Form.Item
          name="message"
          rules={[{ required: true, message: "enter your message" }]}
        >
          <TextArea rows={4} placeholder="Message*" />
        </Form.Item>

        {/* re-captcha */}
        <Form.Item name="captcha" valuePropName="checked">
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
        </Form.Item>

        {/* submit button */}
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              block
              disabled={
                !clientReady ||
                !verified ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Submit
            </Button>
          )}
        </Form.Item>
      </Form>
    </section>
  );
}

export default ContactForm;
