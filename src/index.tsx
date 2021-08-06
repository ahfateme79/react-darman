import ReactDOM from "react-dom";
import Aside from "./components/aside/aside";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

const Wrapper=styled.div`
  width: 100%;
  display: flex;
`


const Index = () => {
  return (
    <Wrapper>
    <Router>
      <Aside />

    </Router>
    </Wrapper>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
