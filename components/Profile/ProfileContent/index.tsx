import React from "react";
import Style from "./style.module.scss";
import ProfileEditSection from "./ProfileEditSection";
import Booking from "./Booking";
import GoCoins from "./GoCoins";

interface PropsType {
  active: string;
}
function ProfileContent({ active }: PropsType) {
  return (
    <div className={Style.profile_content}>
      {active === "profile" && <ProfileEditSection />}
      {active === "bookings" && <Booking />}
      {active === "goCoins" && <GoCoins />}
    </div>
  );
}

export default ProfileContent;
