import React from "react";
import profilePicture from "../../images/profile.jpg";

const ProfilePhoto = () => {
  const profileStyle = {
    height: "12rem",
    width: "12rem",
    borderRadius: "50%",
  };
  return (
    <div>
      <img style={profileStyle} src={profilePicture} alt="for my Profile" />
    </div>
  );
};

export default ProfilePhoto;
