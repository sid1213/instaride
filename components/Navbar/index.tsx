"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Style from "./style.module.scss";
import classNames from "classnames";
import SideNavbar from "@/components/Navbar/sideNavbar";
import Login from "@/(auth)/login/page";

function Navbar() {
  // scrollY functionality in navbar
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    // remove the effect
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handle for navigation show & hide

  return (
    <nav className={classNames(Style.navbar, isScrolled ? "" : Style.scrolled)}>
      <div className="logo">
        <Image src="/assests/logo.png" width={150} height={40} alt="logo" />
        <SideNavbar />
      </div>
      <div className="nav_items">
        <ul className={classNames(isScrolled ? "" : Style.scrolled)}>
          <li>About</li>
          <li>Contact</li>
          <li>Monthly-Rentals</li>
          <Login />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
