"use client";
import React, { useState } from "react";
import { Drawer, Space } from "antd";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Style from "./style.module.scss";
import Link from "next/link";

const SideNavbar: React.FC = () => {
  // Drawer functionality
  const [open, setOpen] = useState<boolean>(false);

  const showDefaultDrawer = () => setOpen(!open);
  const onClose = () => setOpen(!open);
  return (
    <>
      <Space>
        <div className="hamburger_btn" onClick={showDefaultDrawer}>
          {!open ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
      </Space>

      <Drawer
        title={
          <Image src="/assests/logo.png" width={100} height={40} alt="logo" />
        }
        placement="right"
        size="default"
        onClose={onClose}
        open={open}
        className={Style.sideNavbar}
      >
        <ul>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>Contact</li>
          <li>Monthly-Rentals</li>
          <li>Login</li>
        </ul>
      </Drawer>
    </>
  );
};

export default SideNavbar;
