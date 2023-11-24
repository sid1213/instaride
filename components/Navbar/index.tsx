"use client";

// hooks
import React, { useEffect } from "react";
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
import { Avatar, Button, Col, Dropdown, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Style from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "@/slices/index";
import { setUser } from "@/slices/auth";
import ContainerMain from "../ContainerMain";

function Navbar() {
  // states
  const params = useParams();
  const pathname = usePathname();
  const session = useSession(); //track the login status

  // redux state
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  // methods
  const handleSignIn = async () => {
    await signIn("google");
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      dispatch(setUser({ ...session.data.user }));
    }
  }, [session, dispatch]);
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
    <ContainerMain className={Style.container}>
      <Row className={classNames(Style.navbar)}>
        <Col>
          <Row justify={"space-between"}>
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assests/Group.svg"
                  width={100}
                  height={55}
                  alt="logo"
                  className={Style.logoH}
                />
              </Link>

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

                {session.status === "unauthenticated" ||
                session.status === "loading" ? (
                  <li>
                    <Button onClick={handleSignIn}>Login</Button>
                  </li>
                ) : (
                  <li>
                    <Dropdown
                      menu={{ items }}
                      placement="bottomLeft"
                      arrow
                      className="profile_dropdown"
                    >
                      <Space align="center">
                        <Avatar
                          src={user?.image}
                          style={{ backgroundColor: "#87d068" }}
                          icon={<UserOutlined />}
                        />
                        <Link href={"/profile"}>Profile</Link>
                      </Space>
                    </Dropdown>
                  </li>
                )}
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
    </ContainerMain>
  );
}

export default Navbar;
