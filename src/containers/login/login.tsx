import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Loginn } from "../../action";

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

  const logedin = useSelector((state: any) => state.logined);
  const dispach = useDispatch();
  const history = useHistory();

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
          // dispach({
          //   type: "login",
          //   payload: [result.token, info.username],
          // });
          sessionStorage.setItem('auth',result.token)
          sessionStorage.setItem('username',info.username)
          dispach(Loginn())
          history.push("/");
        } else {
          console.log("Username or Password is incorrect :(");
        }
      })
      .catch((err) => {
        console.log("Something went wrong :(");
      });
  };
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
      </Formlogin>
      <p>please login with usename:mor_2314 and pas:83r5^_</p>
    </Style>
  );
};
export default Login;
