import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import api from "../api";
import { useUser } from "../user-context";
import {errorHandler, scrollToBottom} from "../helpers";

const CommentInput = ({ onNewComment }) => {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = event => setInput(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    setLoading(true);
    api
      .post("comments/", {
        json: {
          text: input,
          name: user
        }
      })
      .json()
      .then(onNewComment)
      .then(() => setInput(""))
      .then(() => setLoading(false))
      .then(scrollToBottom)
      .catch(errorHandler(() => setLoading(false)));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end rounded h-32 bg-white shadow"
    >
      <textarea
        className="focus:outline-none resize-none w-full h-full rounded-l p-3"
        placeholder="Write a comment..."
        value={input}
        onChange={handleInput}
      />
      <Button type="submit" className="mb-2 mr-2" isLoading={loading}>
        Submit
      </Button>
    </form>
  );
};

CommentInput.propTypes = {};

export default CommentInput;
