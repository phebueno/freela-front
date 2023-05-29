import styled from "styled-components";
import ProfileBox from "../components/ProfileBox.js";
import { secondaryDarkerColor } from "../constants/colors.js";
import { useProfiles } from "../services/profiles.js";

export default function FollowersPage() {
  const profiles = useProfiles();

  if (profiles && profiles.followers)
    return (
      <ContentContainer >
        <UserTitle>{`SEGUIDORES DE ${profiles.username.toUpperCase()}` }</UserTitle>
        <ProfilesContainer>
          {profiles.followers.length === 0 && "Não há nenhum usuário aqui!"}
          {profiles.followers.map((profile, index) => (
            <ProfileBox key={index} profile={profile} />
          ))}
        </ProfilesContainer>
      </ContentContainer>
    );

  if (profiles && profiles.follows)
    return (
      <ContentContainer>
        <UserTitle>{`QUEM ${profiles.username.toUpperCase()} SEGUE` }</UserTitle>
        {profiles.follows.length === 0 && "Não há nenhum usuário aqui!"}
        {profiles.follows.map((profile, index) => (
          <ProfileBox key={index} profile={profile} />
        ))}
      </ContentContainer>
    );
}

const UserTitle = styled.div`
margin: 30px 0;
color:${secondaryDarkerColor};
font-weight:600;
font-size: 25px;
`;

const ProfilesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
