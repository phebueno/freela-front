import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Post from "../components/Post.js";

export default function UserProfilePage() {
  const { id } = useParams();
  const [userData, setUserData] = useState(undefined);
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/users/${id}`;
    axios
      .get(url)
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
    console.log("teste");
  }, [id]);
  if (id)
    return (
      <ContentContainer>
        {!userData && "Esse perfil não existe!"}
        {userData && (
          <>
            <UserHeader>
              <img src={userData.imgProfile} alt="" />
              <UserInfoContainer>
                <div>{userData.username}</div>
                <div>{userData.bio}</div>
                <button>Seguir</button>
              </UserInfoContainer>
            </UserHeader>
            <PostsContainer>
              {userData.posts.length===0 && <Aviso>"Não há nada aqui!"</Aviso>}
              {userData.posts &&
                userData.posts.map((post, index) => (
                  <Post key={index} post={post} />
                ))}
            </PostsContainer>
          </>
        )}
      </ContentContainer>
    );
  else return <div>Perfil do usuário logado</div>;
}

const Aviso = styled.div`
  border: 1px solid black;
`;

const PostsContainer = styled.div`
  border: 1px solid black;
  display:flex;
  flex-direction:column;
  gap:20px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserHeader = styled.div`
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  border: 1px solid black;
  display: flex;
  padding: 2%;
  img {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
  }
`;
const ContentContainer = styled.section``;
