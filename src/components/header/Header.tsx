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

const notiarr = ["mail", "bell"];

const Header = () => {
  const user = sessionStorage.getItem("username");

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
        <User href="">
          <Userimg src={Userimage} alt="user" />
          <Username>{user && user}</Username>
        </User>
      </Usersection>
    </Headerparen>
  );
};
export default Header;
