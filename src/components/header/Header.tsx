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
import { useState } from "react";

const notiarr = ["mail", "bell"];

const Header = () => {
  const user = sessionStorage.getItem("username");
  const [profile, setProfile] = useState<{ src: any }>({
    src: "",
  });
  const baseurl="http://localhost:3000/"
  const clickhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    var event = e.target.files;
    // var g = event[0].name;
    // e.preventDefault()
    console.log(e.target.files);
    console.log(profile.src);
    if (event != null) {
      setProfile({ src:baseurl + event[0].name });
      console.log(event[0].name)
    }
  };


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
          <Userimg src={profile.src} alt="user" />
          <input type="file" onChange={clickhandler} />
          <Username>{user && user}</Username>
        </User>
      </Usersection>
    </Headerparen>
  );
};
export default Header;
