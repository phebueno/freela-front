import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js";

export function useGetUserData() {
  const location = useLocation();
  const navigate = useNavigate();
  const { idAccount } = useContext(AuthContext);
  let { id } = useParams();
  if(location.pathname==="/"){
    if(!idAccount) navigate("/signin");
    else id = idAccount;
  } 
  const [userData, setUserData] = useState(undefined);

  function getUserData(){
    const url = `${process.env.REACT_APP_API_URL}/users/${id}`;
    axios
      .get(url)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err.message)
        if (id===undefined) navigate("/signin");
      });
  }

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, [id, navigate]);

  return {userData, getUserData};
}

export function useGetAllUsers(){
  const [allUsersData, setAllUsersData] = useState(undefined);
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/users`;
    axios
      .get(url)
      .then((res) => {
        setAllUsersData(res.data);
      })
      .catch((err) => {
        console.log(err.message)
      });
    ;
  }, []);

  return allUsersData;
}