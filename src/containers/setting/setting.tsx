import { useSelector, useDispatch } from "react-redux";
// import '../../globalstylee.css'
import { dark, light } from "../../action";

const Setting: React.FC = () => {
  const val = useSelector((state: any) => state.theme);
  const dispach = useDispatch();

  return (
      <div>
    <button onClick={() => dispach(val === false ? light() : dark())}>
      {" "}
      {val === false ? "light" : "dark"}
    </button>
    </div>
  );
};
export default Setting