import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mainColor } from "../constants/colors.js";

export default function ProfileBox({ profile }) {
  const navigate = useNavigate();
  return (
    <UserHeader onClick={() => navigate(`/users/${profile.id}`)}>
      <img src={profile.imgProfile} alt="" />
      <UserInfoContainer>
        <div><p>{profile.username}</p></div>
        <div>{profile.bio}</div>
      </UserInfoContainer>
    </UserHeader>
  );
}

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap:20px;
  width: 100%;
  p{
    font-weight:500;
  }
`;

const UserHeader = styled.div`
  cursor: pointer;
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  display: flex;
  padding: 2%;
  width: 100%;
  -webkit-box-shadow: 0px 8px 28px -6px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 8px 28px -6px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 8px 28px -6px rgba(0, 0, 0, 0.12);
  img {
    min-width:100px;
    min-height:100px;
    width: 100px;
    height: 100px;
    background-color: ${mainColor};
    border-radius: 50%;
  }
`;
