import React from "react";
import Style from "./style.module.scss";
import Image from "next/image";
import { Col, Row } from "antd";

const FooterComponent: React.FC = () => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={Style.footer}>
      <Col className="gutter-row">
        <div className="links">INSTARIDE</div>
      </Col>
      <Col className="gutter-row links">
        <ul>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </Col>
      <Col className="gutter-row links">
        <ul>
          <li>Offers</li>
          <li>List Of Vehicle</li>
          <li>FAQs</li>
        </ul>
      </Col>
      <Col className="gutter-row links">
        <ul>
          <li>About Us</li>
          <li>Support @instride</li>
          <li>+1099191910</li>
        </ul>
      </Col>
    </Row>
  );
};

export default FooterComponent;
