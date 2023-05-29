import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {BsFillPlusCircleFill} from "react-icons/bs"
import { secondaryColor } from "../constants/colors.js";


export default function NewPostButton() {
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname !== "/signin" && location.pathname !== "/signup")
    return (<BsFillPlusCircleFillStyled onClick={()=>navigate("/post")}/>);
}

const BsFillPlusCircleFillStyled = styled(BsFillPlusCircleFill)`
  cursor: pointer;
  position: fixed;
  z-index: 1000;
  bottom: 20px;
  right: 50px;
  font-size: 50px;
  color:${secondaryColor};
`;

