import {
  Headerparen,
  Usersection,
  User,
  Userimg,
  Notification,
  Notiicon,
  Icons,
  Heading,
  Username,
} from "./headerstyle";
import Userimage from "../../assets/img/user.jpg";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const notiarr = ["mail", "bell"];

const Header = () => {
  const user = sessionStorage.getItem("username");
  const [profile, setProfile] = useState<{ imagePreviewUrl: any }>({
    imagePreviewUrl:""
  });

  const clickhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files != null) {
      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        setProfile({
          imagePreviewUrl: reader.result,
        });
        console.log(JSON.stringify(reader.result));
        sessionStorage.setItem("imageprofile", JSON.stringify(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
      setProfile({
        imagePreviewUrl: JSON.parse(sessionStorage.getItem("imageprofile") || '{}'),
      });

  },[]);

  return (
    <Headerparen>
      <Heading>Dashboard</Heading>
      <Usersection>
        <Notification>
          {notiarr.map((n) => {
            return (
              <Notiicon>
                <Icons className={`icon-${n}-alt`} />
              </Notiicon>
            );
          })}
        </Notification>
        <User>
          <Userimg src={profile.imagePreviewUrl} alt="user" />
          <label
            htmlFor="imageuploud"
            style={{
              backgroundColor: "green",
              color: "white",
              margin: "0 10px",
              padding: "10px",
              border: "1px solid black",
            }}
          >
            uploadimage
          </label>
          <input
            id="imageuploud"
            type="file"
            onChange={clickhandler}
            style={{ display: "none" }}
          />
          <Username>{user && user}</Username>
        </User>
      </Usersection>
    </Headerparen>
  );
};
export default Header;
