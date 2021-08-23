import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { light } from "../../action";

const Style = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Formlogin = styled.form`
  width: 60%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Inputs = styled.input`
  width: 90%;
  height: 50px;
  margin: 20px 0;
`;
const Submit = styled.button`
  width: 100px;
  height: 50px;
  background-color: pink;
`;
const Login: React.FC = () => {
  const [info, setInfo] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          sessionStorage.setItem("auth", result.token);
          sessionStorage.setItem("username", info.username);
          // alert("login sucses!")
        } else {
          console.log("Username or Password is incorrect :(");
        }
      })
      .catch((err) => {
        console.log("Something went wrong :(");
      });
  };
  const val = useSelector((state: any) => state.theme);
  const dispach = useDispatch();
  return (
    <Style>
      <Formlogin onSubmit={handlesubmit}>
        <Inputs
          type="text"
          placeholder="username"
          name="username"
          value={info.username}
          onChange={handlechange}
        />
        <Inputs
          type="password"
          placeholder="password"
          name="password"
          value={info.password}
          onChange={handlechange}
        />
        <Submit>submit</Submit>
        <button onClick={() => dispach(light())}>click!</button>
        <span>{val === false ? "light" : "dark"}</span>
        {/* <span>hello</span> */}
      </Formlogin>
    </Style>
  );
};
export default Login;
