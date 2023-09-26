"use client";
import React, { useState } from "react";
import Style from "./style.module.scss";
import Title from "antd/es/typography/Title";
import { Image, Tooltip } from "antd";

// icons
import { FaUserAlt, FaLocationArrow, FaWallet } from "react-icons/fa";
import classNames from "classnames";

const Profile_List_Data = [
  {
    name: "Profile",
    icon: <FaUserAlt />,
  },
  {
    name: "Bookings",
    icon: <FaLocationArrow />,
  },
  {
    name: "Go Coins",
    icon: <FaWallet />,
  },
];

function ProfileSidebar() {
  const [clickedButton, setClickedButton] = useState<number>();
  const toggleTabs = (buttonId: number) => {
    setClickedButton(buttonId);
  };

  return (
    <div className={Style.profile_sidebar}>
      {/* profile image */}
      <div className="profile_image_container">
        <Image src="./assests/profile.gif" preview={false} />
        <Title level={5}> Jagrati Gupta</Title>
      </div>

      {/* Links */}
      <ul className="profile_sidebar_linklist">
        {Profile_List_Data.map((data, i) => {
          return (
            <li
              key={i}
              className={classNames(
                "profile_links",
                clickedButton === i ? "change_link" : ""
              )}
              onClick={() => toggleTabs(i)}
            >
              {data.name === "Go Coins" ? (
                <Tooltip title="Coming soon">
                  <div>
                    {data.icon}
                    {data.name}
                  </div>
                </Tooltip>
              ) : (
                <div>
                  {data.icon}
                  {data.name}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProfileSidebar;
