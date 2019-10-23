import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/Comment";
import CommentInput from "./components/CommentInput";
import { useUser } from "./user-context";
import Login from "./components/Login";
import AppContainer from "./components/AppContainer";

function App() {
  const { user } = useUser();

  const comments = [
    {
      name: "Tim",
      text: "this is a test message",
      id: "2d418fa1-6b4e-46f0-a12b-99810dde6ce9",
      dateAdded: 1537539445183,
      dateEdited: 1537539445183
    }
  ];

  return (
    <AppContainer>
      {!user ? (
        <Login />
      ) : (
        <div className="w-full">
          {comments.map(comment => (
            <Comment {...comment} key={comment.id} />
          ))}
          <CommentInput />
        </div>
      )}
    </AppContainer>
  );
}

export default App;
