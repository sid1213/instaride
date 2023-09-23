import React from "react";
import Style from "./style.module.scss";
import Title from "antd/es/typography/Title";
import { Image } from "antd";
function ProfileSidebar() {
  return (
    <div className={Style.profile_sidebar}>
      <div className="profile_image_container">
        <Image src="./assests/logo.png" preview={false} width={300} />
        <Title level={5}> Jagrati Gupta</Title>
      </div>
      <ul className="profile_sidebar_linklist">
        <li className="profile_links">
          <div>Profile</div>
        </li>
        <li className="profile_links">
          <div>Profile</div>
        </li>
        <li className="profile_links">
          <div>Profile</div>
        </li>
      </ul>
    </div>
  );
}

export default ProfileSidebar;
