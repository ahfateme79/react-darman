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
  const [profile, setProfile] = useState<{ imagePreviewUrl: any }>({
    imagePreviewUrl: "",
  });
  const baseurl = "http://localhost:3000/";
  const clickhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files != null) {
      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        setProfile({
          imagePreviewUrl: reader.result,
        });
        console.log(reader.result);
        // localStorage.setItem('imageprofile',reader.result);
      };
      reader.readAsDataURL(file);
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
          <Userimg src={profile.imagePreviewUrl} alt="user" />
          <label htmlFor="imageuploud" style={{backgroundColor:"green",color:"white",margin:"0 10px",padding:"10px",border:"1px solid black"}}>uploadimage</label>
          <input id="imageuploud" type="file" onChange={clickhandler} style={{display: 'none'}} />
          <Username>{user && user}</Username>
        </User>
      </Usersection>
    </Headerparen>
  );
};
export default Header;
