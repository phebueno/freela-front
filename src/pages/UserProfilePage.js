import { Link } from "react-router-dom";
import styled from "styled-components";
import Post from "../components/Post.js";
import { useFollowUser } from "../services/follow.js";
import { useLikePost } from "../services/post.js";
import { useGetUserData } from "../services/user.js";
import { SlUserFollow } from "react-icons/sl";
import { secondaryColor, secondaryDarkerColor, mainColor } from "../constants/colors.js";
export default function UserProfilePage() {
  const { userData, getUserData } = useGetUserData();
  const followUser = useFollowUser();
  const likePost = useLikePost();
  return (
    <ContentContainer>
      {!userData && "Esse perfil não existe!"}
      {userData && (
        <>
          <UserHeader>
            <img src={userData.imgProfile} alt="" />
            <UserInfoContainer>
              <div><p>{userData.username}</p></div>
              <div>{userData.bio}</div>
              <span>
                <Link to={`/users/${userData.id}/followers/`}>Seguidores</Link>
                <Link to={`/users/${userData.id}/follows/`}>Segue</Link>
                <SlUserFollowStyle onClick={() => followUser(userData.id, getUserData)}/>
              </span>
            </UserInfoContainer>
          </UserHeader>
          <PostsContainer>
            {userData.posts.length === 0 && <Aviso>"Não há nada aqui!"</Aviso>}
            {userData.posts &&
              userData.posts.map((post, index) => (
                <Post
                  key={index}
                  post={post}
                  likePost={likePost}
                  getUserData={getUserData}
                />
              ))}
          </PostsContainer>
        </>
      )}
    </ContentContainer>
  );
}

const SlUserFollowStyle = styled(SlUserFollow)`
  cursor: pointer;
  color: ${secondaryColor};
  font-size: 30px;
`;

const Aviso = styled.div``;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  a{
    color: ${secondaryDarkerColor};
  }
  p{
    font-weight:500;
  }
`;

const UserHeader = styled.div`
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  display: flex;
  padding: 2%;
  img {
    width: 100px;
    height: 100px;
    background-color: ${mainColor};
    border-radius: 50%;
  }
`;
const ContentContainer = styled.section``;
