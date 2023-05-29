import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainColor, secondaryColor } from "../constants/colors.js";
import AuthContext from "../contexts/AuthContext.js";
import useLogout from "../hooks/useLogout.js";
import { RxMagnifyingGlass } from "react-icons/rx";

export default function Menu() {
  const logout = useLogout();
  const { username } = useContext(AuthContext);
  if (!username)
    return (
      <MenuBar>
        <div>
          <h1>Fomebook</h1>
        </div>
        <Link to={"/users/search"}>Pesquisar usuário <RxMagnifyingGlassStyle/></Link>
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
        <Link to={"/users/search"}><p>Pesquisar usuário</p> <RxMagnifyingGlassStyle/></Link>
        <Navbar>
          <Link to={"/"}>{username.toUpperCase()}</Link>
          <Link onClick={logout}>SAIR</Link>
        </Navbar>
      </MenuBar>
    );
}

const RxMagnifyingGlassStyle = styled(RxMagnifyingGlass)`
color:#FFFFFF;
font-size: 20px;
z-index:101;
`;

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
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: #ffffff;
    font-weight: 600;
    display:flex;
    gap: 10px;
    align-items:center;
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
