import { useEffect, useState } from "react";
import Table from "../../components/table/table";
import styled from "styled-components";
import Loadinganimation from "../../components/loading/loading";

const Userstyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;

const Users: React.FC = () => {
  const [user, setUser] = useState<
    | { id: number; email: string; username: string; password: string }[]
    | undefined
  >();
  const headers = ["id", "email", "username", "password"];
  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });
  });
  return (
    <Userstyle>
      {
          user?<Table data={user} head={headers} />:<Loadinganimation/>
      }
      
    </Userstyle>
  );
};

export default Users;
