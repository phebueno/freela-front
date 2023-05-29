import styled from "styled-components";
import ProfileBox from "../components/ProfileBox.js";
import { useGetAllUsers } from "../services/user.js";

export default function UserSearchPage() {
  const profiles = useGetAllUsers();
    console.log(profiles);
  if (profiles)
    return (
      <ContentContainer >

        <ProfilesContainer>
          {profiles.length === 0 && "Não há nenhum usuário aqui!"}
          {profiles.map((profile, index) => (
            <ProfileBox key={index} profile={profile} />
          ))}
        </ProfilesContainer>
      </ContentContainer>
    );
}

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
