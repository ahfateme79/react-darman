import Chart from "../chart/chart";
import Number from "../number/number";
import { Mainstyle, Rowbox } from "./mainstyle";
import "../../index.css";
import { useSelector } from "react-redux";

const aray = [
  {
    number: "293,000$",
    title: "total sell",
    img: "dollar",
  },
  {
    number: "293,000$",
    title: "total sell",
    img: "dollar",
  },
  {
    number: "293,000$",
    title: "total sell",
    img: "dollar",
  },
  {
    number: "293,000$",
    title: "total sell",
    img: "dollar",
  },
];

const Main: React.FC = () => {
  const val = useSelector((state: any) => state.theme);

  return (
    <Mainstyle>
      <Rowbox>
        {aray.map((n) => {
          return <Number img={n.img} number={n.number} title={n.title} />;
        })}
      </Rowbox>
      <Chart />
    </Mainstyle>
  );
};

export default Main;
