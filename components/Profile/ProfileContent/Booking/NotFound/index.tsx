import { Button, Image } from "antd";
import Style from "./style.module.scss";
import React from "react";

function NotFound() {
  return (
    <div className={Style.booking_empty_container}>
      <div className="booking_empty">
        <Button>No Orders Found!</Button>
        <div className="image">
          <Image src="/assests/empty-bookings.svg" preview={false} />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
