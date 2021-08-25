import { useDispatch, useSelector } from "react-redux";
import { Logoutt } from "../../action";
import {
  Asideparent,
  Asideheading,
  Itemsparen,
  Items,
  Icon,
  Linkstyle,
} from "./asidestyle";

const Aside = () => {
    const dispach = useDispatch();

  const handleclick = () => {
    dispach(Logoutt());
    sessionStorage.removeItem("auth")
    sessionStorage.removeItem("username")
  };


  const array = [
    {
      title: "Home",
      path: "/",
      icon: "home",
    },
    {
      title: "Products",
      path: "/Products",
      icon: "bag",
    },
    {
      title: "Users",
      path: "/Users",
      icon: "users",
    },
    {
      title: "Setting",
      path: "/Setting",
      icon: "cog",
    },
    {
      title: "Logout",
      path: "/Login",
      icon: "login",
      click:handleclick
    },
  ];

  const val = useSelector((state: any) => state.theme);
  return (
    <Asideparent
      theme={val === false ? "light" : "dark"}
      color={val === false ? "light" : "dark"}
    >
      <Asideheading color={val === false ? "light" : "dark"}>
        Dashboard
      </Asideheading>
      <Itemsparen>
        {array.map((arr, index) => {
          return (
            <Items key={index}>
              <Icon
                className={`icon-${arr.icon}`}
                color={val === false ? "light" : "dark"}
              />
              <Linkstyle color={val === false ? "light" : "dark"} to={arr.path} onClick={arr.click}>
                {arr.title}
              </Linkstyle>
            </Items>
          );
        })}
      </Itemsparen>
    </Asideparent>
  );
};
export default Aside;
