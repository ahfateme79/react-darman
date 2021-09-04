import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import '../../globalstylee.css'
import { dark, english, farsi, light } from "../../action";

const Setting: React.FC = () => {
  const val = useSelector((state: any) => state.theme);
  const lang = useSelector((state: any) => state.lang);
  const dispach = useDispatch();

  const handleclick = () => {
    let a = dispach(val === false ? light() : dark());
    sessionStorage.setItem("theme", JSON.stringify(a));
    return a;
  };
  const colors = JSON.parse(sessionStorage.getItem("theme") || "{}");
  // alert(colors.type)

  const handlelanguage = () => {
    let b = dispach(lang === false ? farsi() : english());
    sessionStorage.setItem("lang", JSON.stringify(b));
    return b;
  };
  const language = JSON.parse(sessionStorage.getItem("lang") || "{}");

  return (
    <div>
      <button onClick={handleclick} style={{ backgroundColor: colors.bg }}>
        {colors.type?.replace(/['"]+/g, "")}
      </button>

      <button style={{ margin: "50px" }} onClick={handlelanguage}>
        {language.type?.replace(/['"]+/g, "")}
      </button>
    </div>
  );
};
export default Setting;
// colors?.replace(/['"]+/g, '')
