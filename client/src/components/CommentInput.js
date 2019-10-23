import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const CommentInput = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleInput = event => setInput(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end rounded mt-4 h-32 bg-white shadow">
      <textarea
        className="focus:outline-none resize-none w-full h-full rounded-l p-3"
        placeholder="Write a comment..."
        type="text"
        value={input}
        onChange={handleInput}
      />
      <Button className="mb-2 mr-2">Submit</Button>
    </form>
  );
};

CommentInput.propTypes = {};

export default CommentInput;
