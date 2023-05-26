import { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../contexts/AuthContext.js";
import useLogout from "../hooks/useLogout.js";

export default function Menu() {
  const logout = useLogout();
  const {username} =useContext(AuthContext);
  return (
    <MenuBar>
      <div>Fomebook</div>
      <div>{username}</div>
      <ExitButton onClick={logout}>Sair</ExitButton>
    </MenuBar>
  );
}

const ExitButton = styled.div`
cursor:pointer;
`;

const MenuBar = styled.div`
display:flex;
justify-content:space-between;
`;


