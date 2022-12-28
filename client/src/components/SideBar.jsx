import React from "react";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
import Cookies from "universal-cookie";
const SideBar = () => {
  const cookies = new Cookies();
  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("fullName");
    cookies.remove("avatarURL");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");
    window.location.reload();
  };
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="hospital" width={30} />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2" onClick={logout}>
        <div className="icon1__inner">
          <img src={LogoutIcon} alt="logout" width={30} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
