"use client";
import React from "react";
import Style from "./style.module.scss";
import ProfileEditSection from "./ProfileEditSection";
import Booking from "./Booking";

function ProfileContent() {
  return (
    <div className={Style.profile_content}>
      <ProfileEditSection />
      <Booking />
    </div>
  );
}

export default ProfileContent;
