import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/Comment";
import CommentInput from "./components/CommentInput";

function App() {
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
    <div className="h-screen bg-teal-100 py-20 text-gray-800 font-sans">
      <div className="flex h-full w-1/3 m-auto">
        <div className="w-full">
          {comments.map(comment => (
            <Comment {...comment} key={comment.id} />
          ))}
          <CommentInput />
        </div>
      </div>
    </div>
  );
}

export default App;
