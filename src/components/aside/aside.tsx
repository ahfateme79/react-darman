import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSolutionBuilderHost } from "typescript";
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
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("username");
  };

  // alert(colors);
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
      click: handleclick,
    },
  ];
  const [colors, setColors] = useState<{type: string,bg:string,textcolor:string}>({
    type:'',
    bg:'',
    textcolor:''
  });
  useEffect(() => {
    setColors(JSON.parse(window.sessionStorage.getItem("theme") || "{}"));
  });
  // console.log(val);

  return (
    <Asideparent theme={colors.bg} color={colors.textcolor}>
      <Asideheading color={colors.textcolor}>Dashboard</Asideheading>
      <Itemsparen>
        {array.map((arr, index) => {
          return (
            <Items key={index}>
              <Icon className={`icon-${arr.icon}`} color={colors.textcolor} />
              <Linkstyle
                color={colors.textcolor}
                to={arr.path}
                onClick={arr.click}
              >
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
