"use Client";
import React, { useEffect, useState } from "react";
import { PhoneOutlined, UserOutlined, FolderOutlined } from "@ant-design/icons";
import Style from "./index.module.scss";
import { Modal, Space, Form, Input, Button, Checkbox } from "antd";
import Title from "antd/es/typography/Title";

interface PersonalDetailsPropsType {
  isPersonalModelOpen: boolean;
  setIsPersonalModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOtpModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  PhoneNumber: number | null;
}
function PersonalDetailsModal({
  isPersonalModelOpen,
  setIsPersonalModelOpen,
  setIsOtpModalOpen,
  PhoneNumber,
}: PersonalDetailsPropsType) {
  // state
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);

  const handleCancel = () => setIsPersonalModelOpen(false);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
    setIsOtpModalOpen(true);
    setIsPersonalModelOpen(false);
  };

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);

  return (
    <>
      <Modal
        title=""
        open={isPersonalModelOpen}
        onCancel={handleCancel}
        className={Style.details_modal}
        centered
        footer={false}
      >
        <Space align="center" direction="vertical" className={Style.flex_box}>
          <Title level={4} className={Style.heading}>
            Personal Details
          </Title>

          <Form
            form={form}
            name="personal_details"
            layout="horizontal"
            onFinish={onFinish}
          >
            {/* first name */}
            <Form.Item
              name="firstname"
              rules={[
                { required: true, message: "Please input your firstname!" },
              ]}
            >
              <Input
                placeholder="FirstName"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            {/* last name */}
            <Form.Item
              name="lastname"
              rules={[
                { required: true, message: "Please input your lastname!" },
              ]}
            >
              <Input
                placeholder="LastName"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            {/* email */}
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                type="email"
                placeholder="Email"
                prefix={<FolderOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            {/* default number */}
            <Form.Item name="number" initialValue={PhoneNumber?.toString()}>
              <Input
                type="number"
                disabled={true}
                prefix={<PhoneOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            {/* check box */}
            <Form.Item name="agree" valuePropName="checked">
              <Checkbox>I agree the term and conditions</Checkbox>
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
                    !form.getFieldsValue().agree ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Submit
                </Button>
              )}
            </Form.Item>
          </Form>
        </Space>
      </Modal>
    </>
  );
}

export default PersonalDetailsModal;
