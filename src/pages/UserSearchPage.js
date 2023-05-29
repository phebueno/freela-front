import { useState } from "react";
import styled from "styled-components";
import ProfileBox from "../components/ProfileBox.js";
import { useGetAllUsers } from "../services/user.js";

export default function UserSearchPage() {
  const profiles = useGetAllUsers();
  const [query, setQuery] = useState("");
  if (profiles)
    return (
      <ContentContainer>
        <input
          placeholder="Digite aqui o nome do seu usuário..."
          onChange={(event) => setQuery(event.target.value)}
        />
        <ProfilesContainer>
          {profiles.length === 0 && "Não há nenhum usuário aqui!"}
          {profiles
            .filter((post) => {
              if (query === "") {
                return post;
              } else if (
                post.username.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }
            })
            .map((profile, index) => (
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
  gap: 10px;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  input{
    margin: 10px 0;
    width: 400px;
  }
`;
