"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Style from "./style.module.scss";
import classNames from "classnames";
import SideNavbar from "@/components/Navbar/sideNavbar";
import Link from "next/link";
import Login from "@/(auth)/login/page";

function Navbar() {
  return (
    <nav className={classNames(Style.navbar)}>
      <div className="logo">
        <Image src="/assests/logo.png" width={150} height={40} alt="logo" />
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
          <Login />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
