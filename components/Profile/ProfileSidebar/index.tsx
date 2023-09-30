"use client";
import React, { useState } from "react";
import Style from "./style.module.scss";
import Title from "antd/es/typography/Title";
import { Button, Col, Image, Row, Tooltip } from "antd";

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
    <Row className={Style.profile_sidebar} gutter={[0, 16]}>
      {/* profile image */}
      <Col className={Style.profile_image_container} span={24}>
        <Image
          src="./assests/profile.gif"
          preview={false}
          className={Style.profile_img}
        />
        <Title level={5}> Jagrati Gupta</Title>
      </Col>

      {/* Links */}
      <Col className={Style.profile_sidebar_linklist} span={24}>
        {Profile_List_Data.map((data, i) => {
          return (
            <React.Fragment key={i}>
              {data.btn_name === "goCoins" ? (
                <Tooltip title="Coming Soon.." className={Style.disabled_btn}>
                  <Button
                    key={i}
                    block
                    disabled={true}
                    className={Style.profile_links}
                  >
                    <div>
                      {data.icon}
                      {data.name}
                    </div>
                  </Button>
                </Tooltip>
              ) : (
                <Button
                  key={i}
                  block
                  className={classNames(
                    Style.profile_links,
                    clickedButton === i ? Style.change_link : ""
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
                </Button>
              )}
            </React.Fragment>
          );
        })}
      </Col>
    </Row>
  );
}

export default ProfileSidebar;
