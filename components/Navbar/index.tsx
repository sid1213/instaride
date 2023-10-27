"use client";

// hooks
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { useParams, usePathname, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react"; //hooks and function from next auth

// components
import SideNavbar from "@/components/Navbar/sideNavbar";
import DateHeader from "./DateHeader";
// import Login from "@/(auth)/login/page";   // Ues this Login page while Mobile verification

//antD icons and component
import { Button, Col, Divider, Dropdown, Row } from "antd";
import { UserOutlined, CaretDownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Style from "./style.module.scss";

function Navbar() {
  // states
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const session = useSession();

  // methods
  const handleSignIn = async () => {
    return await signIn("google");
  };
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push("/profile");
  };

  // antD
  const items: MenuProps["items"] = [
    {
      label: "Orders",
      key: "1",
      onClick: () => {
        console.log("1");
      },
    },
    {
      label: "SignOut",
      key: "2",
      onClick: () => {
        console.log("2");
      },
    },
  ];

  return (
    <Row className={classNames(Style.navbar)}>
      <Col span={24}>
        <Row justify={"space-between"}>
          <div className="logo">
            <Image
              src="/assests/Group.svg"
              width={100}
              height={55}
              alt="logo"
            />
            <SideNavbar />
          </div>
          <div className="nav_items">
            <ul>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li>
                <Button onClick={handleSignIn}>Login</Button>
              </li>
              <li>
                <Dropdown.Button
                  onClick={handleButtonClick}
                  menu={{ items }}
                  placement="bottom"
                  icon={<CaretDownOutlined />}
                >
                  <UserOutlined /> Profile
                </Dropdown.Button>
              </li>
            </ul>
          </div>
        </Row>
      </Col>
      {(pathname === "/checkout" ||
        pathname === `/${params.cityname}` ||
        pathname === `/${params.cityname}/${params.vehiclename}`) && (
        <Col span={24}>
          <DateHeader />
        </Col>
      )}
    </Row>
  );
}

export default Navbar;
