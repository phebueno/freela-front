import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js";

export default function useKickIn() {
  const navigate = useNavigate();
  const {token,username} = useContext(AuthContext);
  useEffect(() => {
    if (token && username) navigate("/")
  });
}