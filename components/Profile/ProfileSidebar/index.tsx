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
    btn_name: "profile",
    icon: <FaUserAlt />,
  },
  {
    name: "Bookings",
    btn_name: "bookings",
    icon: <FaLocationArrow />,
  },
  {
    name: "Go Coins",
    btn_name: "goCoins",
    icon: <FaWallet />,
  },
];
interface PropsType {
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
}
function ProfileSidebar({ setActive, setVisible, visible }: PropsType) {
  const [clickedButton, setClickedButton] = useState<number>(0);
  const toggleTabs = (buttonId: number) => setClickedButton(buttonId);

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
              onClick={() => {
                if (data.btn_name) {
                  setVisible(!visible);
                }

                setActive(data.btn_name);
                toggleTabs(i);
              }}
            >
              <div>
                {data.icon}
                {data.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProfileSidebar;
