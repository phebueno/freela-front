import dayjs from "dayjs";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { secondaryColor } from "../constants/colors.js";
export default function Post({ post, likePost, getUserData }) {
  return (
    <PostBox>
      <img src={post.imgPost} alt="" />
      <PostInfo>
        <div>
          <AiOutlineHeartStyle onClick={() => likePost(post.id, getUserData)} />
          <p>{post.likesCount} curtidas</p>
        </div>
        <div>{dayjs(post.createdAt).format("DD/MM/YYYY [às] H[h]mm")}</div>
      </PostInfo>
      <div>{post.bodyPost}</div>
    </PostBox>
  );
}

const AiOutlineHeartStyle = styled(AiOutlineHeart)`
  cursor: pointer;
  color: ${secondaryColor};
  font-size: 30px;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding: 3%;
  -webkit-box-shadow: 0px 8px 28px -6px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 8px 28px -6px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 8px 28px -6px rgba(0, 0, 0, 0.12);
  img {
    max-height: 400px;
    width: 100%;
    background-color: lightgray;
    object-fit: cover;
  }
`;
