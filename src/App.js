import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Menu from "./components/Menu.js";
import AuthContext from "./contexts/AuthContext.js";
import FollowersPage from "./pages/FollowersPage.js";
import NewPostPage from "./pages/NewPostPage.js";
import SignInPage from "./pages/SignInPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import UserProfilePage from "./pages/UserProfilePage.js";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [idAccount, setIdAccount] = useState(localStorage.getItem("id"));
  return (
    <PagesContainer>
      <AuthContext.Provider value={{username, setUsername,token, setToken, idAccount, setIdAccount}}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<UserProfilePage />} />
            <Route path="/users/:id" element={<UserProfilePage />} />
            <Route path="/post" element={<NewPostPage />} />
            <Route path="/users/:id/followers/" element={<FollowersPage />} />
            <Route path="/users/:id/follows/" element={<FollowersPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </PagesContainer>
  );
}

export default App;

const PagesContainer = styled.main`
  margin: 0 auto;
  padding: 0 10%;
  max-width: 1020px;
`;
