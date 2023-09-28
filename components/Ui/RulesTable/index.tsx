"use client";
import React, { useState } from "react";
import { Button, Col, Modal, Row, Table } from "antd";
import { FaCaretRight } from "react-icons/fa6";
import type { ColumnsType } from "antd/es/table";
import Style from "./index.module.scss";
import Title from "antd/es/typography/Title";

interface DataType {
  key: string;
  name: string;
  borrow: number;
  repayment: number;
}

const RulesTable = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
    console.log("hello");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Borrow",
      dataIndex: "borrow",
    },
    {
      title: "Repayment",
      dataIndex: "repayment",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      borrow: 10,
      repayment: 33,
    },
    {
      key: "2",
      name: "Jim Green",
      borrow: 100,
      repayment: 0,
    },
    {
      key: "3",
      name: "Joe Black",
      borrow: 10,
      repayment: 10,
    },
    {
      key: "4",
      name: "Jim Red",
      borrow: 75,
      repayment: 45,
    },
  ];

  return (
    <>
      <Button
        type="default"
        block
        className={Style.modelOpener}
        onClick={showModal}
      >
        <Row justify={"space-between"}>
          <Col>Cancellation Policy</Col>
          <Col>
            <FaCaretRight />
          </Col>
        </Row>
      </Button>
      <Modal
        title={<Title level={5}>Cancellation Policy</Title>}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className={Style.modal}
        width={1000}
      >
        <Table columns={columns} dataSource={data} pagination={false} />
      </Modal>
    </>
  );
};

export default RulesTable;
