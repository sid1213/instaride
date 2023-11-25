"use client";
import React, { useState } from "react";
// components
import Title from "antd/es/typography/Title";
import { Badge, Button, Col, Row, Space } from "antd";
import Image from "next/image";
// icons
import { FaUserAlt, FaLocationArrow, FaWallet } from "react-icons/fa";
// redux
import { useAppSelector } from "@/slices/index";
import classNames from "classnames";
import Style from "./style.module.scss";

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
  // states
  const [tabIndex, setTabIndex] = useState<number>(0);
  const toggleTabs = (buttonId: number) => setTabIndex(buttonId);

  // redux
  const { user } = useAppSelector((state) => state.user);

  return (
    <Row className={Style.profile_sidebar} gutter={[0, 16]}>
      {/* profile image */}
      <Col className={Style.image_container} span={24}>
        <Image
          unoptimized={true}
          src={"/assests/profile.gif"}
          width={200}
          height={200}
          className={Style.img}
          alt={user?.name || "profile_img"}
        />
        <Title level={5}>{user?.name}</Title>
      </Col>

      {/* Links */}
      <Col className={Style.buttons_container} span={24}>
        {Profile_List_Data.map((data, i) => {
          return (
            <React.Fragment key={i}>
              {data.btn_name === "goCoins" ? (
                // <Badge
                //   count={"Coming Soon.."}
                //   className={Style.disabled_btn}
                //   color="orange"
                // >
                //   <Button key={i} block disabled={true}>
                //     <Space>
                //       {data.icon}
                //       {data.name}
                //     </Space>
                //   </Button>
                // </Badge>
                <></>
              ) : (
                <Button
                  key={i}
                  block
                  className={classNames(
                    Style.profile_tab,
                    tabIndex === i ? Style.change_tab : ""
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
