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
  const [lang, setLang] = useState<{
    type: string;
    sidebar: {
      Dashboard: string;
      Home: string;
      Products: string;
      Users: string;
      Setting: string;
      Logout: string;
    };
  }>({
    type: "",
    sidebar: {
      Dashboard: "",
      Home: "",
      Products: "",
      Users: "",
      Setting: "",
      Logout: "",
    },
  });
  const [colors, setColors] = useState<{
    type: string;
    bg: string;
    textcolor: string;
  }>({
    type: "",
    bg: "",
    textcolor: "",
  });
  useEffect(() => {
    setColors(JSON.parse(window.sessionStorage.getItem("theme") || "{}"));
    setLang(JSON.parse(window.sessionStorage.getItem("lang") || "{}"));
  });
  // console.log(val);

  const array = [
    {
      title: lang.sidebar.Home,
      path: "/",
      icon: "home",
    },
    {
      title: lang.sidebar.Products,
      path: "/Products",
      icon: "bag",
    },
    {
      title: lang.sidebar.Users,
      path: "/Users",
      icon: "users",
    },
    {
      title: lang.sidebar.Setting,
      path: "/Setting",
      icon: "cog",
    },
    {
      title: lang.sidebar.Logout,
      path: "/Login",
      icon: "login",
      click: handleclick,
    },
  ];

  return (
    <Asideparent theme={colors.bg} color={colors.textcolor}>
      <Asideheading color={colors.textcolor}>
        {lang ? lang.sidebar.Dashboard : "Dashboard"}
      </Asideheading>
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
