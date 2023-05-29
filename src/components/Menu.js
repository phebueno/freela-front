import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../contexts/AuthContext.js";
import useLogout from "../hooks/useLogout.js";

export default function Menu() {
  const logout = useLogout();
  const { username } = useContext(AuthContext);
  if (!username)
    return (
      <MenuBar>
        <div>Fomebook</div>
        <Link to={"/users/search"}>Pesquisar usuário</Link>
        <Navbar>
          <Link to={"/signin"}>SignIn</Link>
          <Link to={"/signup"}>SignUp</Link>
        </Navbar>
      </MenuBar>
    );
  else
    return (
      <MenuBar>
        <div>Fomebook</div>
        <div>{username}</div>
        <Link to={"/users/search"}>Pesquisar usuário</Link>
        <Navbar>
          <Link to={"/"}>Meu perfil</Link>
          <Link onClick={logout}>Sair</Link>
        </Navbar>
      </MenuBar>
    );
}

const Navbar = styled.ul`
  display: flex;
  gap: 10px;
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
