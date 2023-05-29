import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function NewPostButton() {
  const location = useLocation();
  if (location.pathname !== "/signin" && location.pathname !== "/signup")
    return <PostButton to={"/post"}>NewPost</PostButton>;
}

const PostButton = styled(Link)`
  text-decoration: none;
  position: fixed;
  z-index: 1000;
  bottom: 20px;
  right: 50px;
`;
