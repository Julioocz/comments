import React, { useEffect, useState } from "react";
import ky from "ky";

import "./App.css";
import Comment from "./components/Comment";
import CommentInput from "./components/CommentInput";
import { useUser } from "./user-context";
import Login from "./components/Login";
import AppContainer from "./components/AppContainer";
import api from "./api";
import CommentsContainer from "./components/CommentsContainer";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  const { user } = useUser();

  return (
    <AppContainer>
      <ErrorBoundary>{!user ? <Login /> : <CommentsContainer />}</ErrorBoundary>
    </AppContainer>
  );
}

export default App;
