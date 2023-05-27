import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useGetUserData() {
  const { id } = useParams();
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
