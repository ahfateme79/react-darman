import {
  Numbertyle,
  Iconnumber,
  Titlesecnumbr,
  Numbers,
  Title,
} from "./numberstyle";

interface Numberprops {
  img: string;
  number: string;
  title: string;
}

const Number: React.FC<Numberprops> = ({ img, number, title }) => {
  return (
    <Numbertyle>
      <Titlesecnumbr>
        <Numbers>{number}</Numbers>
        <Title>{title}</Title>
      </Titlesecnumbr>
      <Iconnumber className={`icon-${img}`}></Iconnumber>
    </Numbertyle>
  );
};
export default Number;
