import { Col, Row, Tag } from "antd";
import Image from "next/image";
import Style from "./style.module.scss";
import React from "react";

function NotFound() {
  return (
    <Row
      className={Style.booking_empty_container}
      justify={"center"}
      align={"middle"}
    >
      <Col className="tag">
        <Tag color="gold">No Orders Found!</Tag>
      </Col>

      <Col className={Style.image}>
        <Image src="/assests/empty-bookings.svg" width={220} alt=" 404" />
      </Col>
    </Row>
  );
}

export default NotFound;
