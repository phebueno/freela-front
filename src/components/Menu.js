import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainColor, secondaryColor } from "../constants/colors.js";
import AuthContext from "../contexts/AuthContext.js";
import useLogout from "../hooks/useLogout.js";

export default function Menu() {
  const logout = useLogout();
  const { username } = useContext(AuthContext);
  if (!username)
    return (
      <MenuBar>
        <div>
          <h1>Fomebook</h1>
        </div>
        <Link to={"/users/search"}>Pesquisar usuário</Link>
        <Navbar>
          <Link to={"/signin"}>SIGN IN</Link>
          <Link to={"/signup"}>SIGN UP</Link>
        </Navbar>
      </MenuBar>
    );
  else
    return (
      <MenuBar>
        <div>
          <h1>Fomebook</h1>
        </div>
        <Link to={"/users/search"}>Pesquisar usuário</Link>
        <Navbar>
          <Link to={"/"}>{username}</Link>
          <Link onClick={logout}>Sair</Link>
        </Navbar>
      </MenuBar>
    );
}

const Navbar = styled.ul`
  display: flex;
  gap: 50px;
  a {
    cursor: pointer;
    text-decoration: none;
  }

`;

const MenuBar = styled.div`
height: 80px;
  background-color: ${mainColor};
  font-family: 'Montserrat', sans-serif;
  color: #FFFFFF;
  a,a:link, a:visited, a:hover, a:active{
    color: #FFFFFF;
    font-weight: 600;
  }
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: "Bebas Neue", sans-serif;
    color: ${secondaryColor};
    font-size: 50px;
  }
`;
