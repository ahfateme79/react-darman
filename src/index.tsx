import ReactDOM from "react-dom";
import Aside from "./components/aside/aside";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import "./assets/css/fontello-embedded.css";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import routes from "./router";
import Login from "./containers/login/login";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Left = styled.div`
  width: 80%;
`;

const Index = () => {
  return (
    <Wrapper>
      <Router>
        <Aside />
        <Left>
          <Header />
          <Switch>
            {routes.map((n) => {
               let Container = require(`${n.containerPath}`).default
              return <Route exact path={n.path}><Container/></Route>;
            })}
          </Switch>
        </Left>
      </Router>
    </Wrapper>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
