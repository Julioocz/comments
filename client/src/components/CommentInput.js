import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import api from "../api";
import { useUser } from "../user-context";
import { errorHandler, scrollToBottom } from "../helpers";
import TextArea from "./TextArea";

const CommentInput = ({ onNewComment }) => {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

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
      className="flex rounded bg-white shadow"
      style={{ minHeight: "8rem"}}
    >
      <TextArea
        placeholder="Write a comment..."
        className="rounded-l p-3"
        value={input}
        onChange={setInput}
      />
      <Button type="submit" className="mb-2 mr-2 self-end" isLoading={loading}>
        Submit
      </Button>
    </form>
  );
};

CommentInput.propTypes = {};

export default CommentInput;
