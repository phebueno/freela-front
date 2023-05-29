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
