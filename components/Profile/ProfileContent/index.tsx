import React from "react";
import Style from "./style.module.scss";
import Profile from "./Profile";
import Booking from "./Booking";
import GoCoins from "./GoCoins";
import classNames from "classnames";

interface PropsType {
  active: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
function ProfileContent({ active, setVisible }: PropsType) {
  return (
    <div className={classNames(Style.profile_content)}>
      {active === "profile" && <Profile setVisible={setVisible} />}
      {active === "bookings" && <Booking setVisible={setVisible} />}
      {active === "goCoins" && <GoCoins setVisible={setVisible} />}
    </div>
  );
}
export default ProfileContent;
