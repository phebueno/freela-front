import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ProfileBox({ profile }) {
  const navigate = useNavigate();
  return (
    <UserHeader onClick={() => navigate(`/users/${profile.id}`)}>
      <img src={profile.imgProfile} alt="" />
      <UserInfoContainer>
        <div>{profile.username}</div>
        <div>{profile.bio}</div>
      </UserInfoContainer>
    </UserHeader>
  );
}

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const UserHeader = styled.div`
  cursor: pointer;
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  border: 1px solid black;
  display: flex;
  padding: 2%;
  width: 100%;
  img {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
  }
`;
