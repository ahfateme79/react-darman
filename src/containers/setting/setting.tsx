import { useSelector, useDispatch } from "react-redux";
// import '../../globalstylee.css'
import { dark, light } from "../../action";

const Setting: React.FC = () => {
  const val = useSelector((state: any) => state.theme);
  const dispach = useDispatch();

  const handleclick = () => {
    let a = dispach(val === false ? light() : dark());
    sessionStorage.setItem("theme", JSON.stringify(a));
    return a;
  };
  const colors = JSON.parse(sessionStorage.getItem("theme") || "{}");
  // alert(colors.type)
  return (
    <div>
      <button onClick={handleclick} style={{ backgroundColor: colors.bg }}>
        {colors.type?.replace(/['"]+/g, "")}
      </button>
    </div>
  );
};
export default Setting;
// colors?.replace(/['"]+/g, '')
