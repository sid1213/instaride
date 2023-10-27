"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Style from "./style.module.scss";
import classNames from "classnames";
import SideNavbar from "@/components/Navbar/sideNavbar";
import Link from "next/link";
import Login from "@/(auth)/login/page";
import { Button, Col, Row } from "antd";
import DateHeader from "./DateHeader";
import { useParams, usePathname } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
function Navbar() {
  const params = useParams();
  const pathname = usePathname();
  const session = useSession();
  console.log(session);
  const handleSignIn = async () => {
    return await signIn("google");
  };
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
