import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export function useProfiles() {
    const { id } = useParams();
  const [followersData, setFollowersData] = useState(undefined);
  const location = useLocation();
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}${location.pathname}`;
    axios
      .get(url)
      .then((res) => {
        setFollowersData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [id, location.pathname]);

  return followersData;
}
