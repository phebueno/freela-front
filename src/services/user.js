import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js";
import useKickOut from "../hooks/useKickOut.js";

export function useGetUserData() {
  const location = useLocation();
  const navigate = useNavigate();
  const { idAccount } = useContext(AuthContext);
  let { id } = useParams();
  useKickOut();
  if(location.pathname==="/"){
    if(!idAccount) navigate("/signin");
    else id = idAccount;
  } 
  //SE PATHNAME FOR /, INSERIR ID ACCOUNT COMO ID PARA VISITA DA PÁGINA
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/users/${id}`;
    axios
      .get(url)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  return userData;
}
