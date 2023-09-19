"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./style.module.scss";
import classNames from "classnames";

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
  return (
    <nav className={classNames(style.navbar, { isScrolled: style.scrolled })}>
      <Image src="/assests/logo.png" width={150} height={40} alt="logo" />
      <div className="nav_items">
        <ul>
          <li>Monthly-Rentals</li>
          <li>Login</li>
          <li>Monthly-Rentals</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
