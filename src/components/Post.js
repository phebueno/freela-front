import dayjs from "dayjs";
import styled from "styled-components";
export default function Post({ post }) {
  return (
    <PostBox>
      <img src={post.imgPost} alt="" />
      <PostInfo>
        <div>
          <button>Curtir</button>({post.likesCount} curtidas)
        </div>
        <div>{dayjs(post.createdAt).format("DD/MM/YYYY [às] H[h]mm")}</div>
      </PostInfo>
      <div>{post.bodyPost}</div>
    </PostBox>
  );
}

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 3%;
  img {
    min-height: 200px;
    width: 100%;
    background-color: lightgray;
  }
`;
