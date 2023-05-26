import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import FollowersPage from "./pages/FollowersPage.js";
import NewPostPage from "./pages/NewPostPage.js";
import SignInPage from "./pages/SignInPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import UserProfilePage from "./pages/UserProfilePage.js";

function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<UserProfilePage />} />
          <Route path="/users/:id" element={<UserProfilePage />} />
          <Route path="/post" element={<NewPostPage />} />
          <Route path="/followers/:id" element={<FollowersPage />} />
          <Route path="/follows/:id" element={<FollowersPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  );
}

export default App;

const PagesContainer = styled.main`
  margin: 0 auto;
  padding: 0 10%;
  max-width: 1020px;
`;
