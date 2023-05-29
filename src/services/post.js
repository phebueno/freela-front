import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js";

export function useNewPost() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (body) => {
    const url = `${process.env.REACT_APP_API_URL}/posts/new`;
    axios
      .post(url, body, config)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data);
      });
  };
}

export function useLikePost(){
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (postId, getUserData) => {
    console.log(postId);
    const url = `${process.env.REACT_APP_API_URL}/posts/${postId}/like`;
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
      });
  };
}

