import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js";

export function useFollowUser(){
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return (userId, getUserData) => {
      const url = `${process.env.REACT_APP_API_URL}/users/${userId}/follow`;
      axios
        .post(url,{}, config)
        .then((res) => {
          console.log(res.data);
          getUserData();
        })
        .catch((err) => {
          console.log(err.response);
          if(err.response.data==="Unauthorized"){
            alert("Faça login para continuar usando o nosso serviço!");
            navigate("/signin")
          }
          else alert(err.response.data);
        });
    };
  }