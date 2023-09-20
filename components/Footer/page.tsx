import React from "react";
import Style from "./style.module.scss";
import Image from "next/image";

function FooterComponent() {
  return (
    <div className={Style.footer}>
      <div className="links">INSTARIDE</div>

      <div className="links">
        <ul>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>

      <div className="links">
        <ul>
          <li>Offers</li>
          <li>List Of Vehicle</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="links">
        <ul>
          <li>About Us</li>
          <li>Support @instride</li>
          <li>+1099191910</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterComponent;
