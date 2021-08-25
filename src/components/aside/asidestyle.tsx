import styled from "styled-components";
import { Link } from "react-router-dom";

export const Asideparent = styled.aside`
  width: 20%;
  height: 100vh;
  background-color: ${(props) =>
    props.theme === "light" ? "pink" : "#14213d"};
`;
export const Asideheading = styled.h3`
  color: ${(props) => props.color === "light" ? "black" : "white"};
  padding: 30px;
  border-bottom: 1px solid gray;
`;
export const Itemsparen = styled.ul`
  width: 100%;
  padding: 20px;
`;
export const Items = styled.li`
  margin: 20px 0;
  display: flex;
  height: 50px;
  align-items: center;
`;
export const Icon = styled.i`
  font-size: 20px;
  color: ${(props) => props.color === "light" ? "black" : "white"};
`;
export const Linkstyle = styled(Link)`
  color: ${(props) => props.color === "light" ? "black" : "white"};
  margin: 0 10px;
  text-decoration: none;
`;
