/* global confirm */

import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import api from "../api";
import { scrollToBottom, once } from "../helpers";

const LONG_POLLING_INTERVAL = 1000;

const sortComments = comments =>
  comments.sort(
    (commentA, commentB) => commentA.dateAdded - commentB.dateAdded
  );

const scrollToBottomOnce = once(scrollToBottom);

const CommentsContainer = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Homemade long-polling. I would look for a more robust solution for a production app
    const intervalID = setInterval(
      () =>
        api
          .get("comments/")
          .json()
          .then(setComments)
          .then(scrollToBottomOnce),
      LONG_POLLING_INTERVAL
    );

    return () => clearInterval(intervalID);
  }, []);

  const addComment = comment => {
    setComments([...comments, comment]);
  };

  const deleteComment = commentID => {
    // eslint-disable-next-line no-restricted-globals
    confirm("Are you sure you want to delete this comment?") &&
      api
        .delete(`comment/${commentID}`)
        .then(() =>
          setComments(comments.filter(comment => comment.id !== commentID))
        );
  };

  const updateComment = newComment =>
    api
      .put(`comment/${newComment.id}`, { json: newComment })
      .json()
      .then(newCommentResult =>
        setComments(
          comments.map(comment =>
            newComment.id === comment.id ? {...comment, ...newCommentResult} : comment
          )
        ));

  const orderedComments = useMemo(() => sortComments(comments), [comments]);

  return (
    <div className="w-full">
      {orderedComments.map(comment => (
        <Comment
          comment={comment}
          key={comment.id}
          onDelete={deleteComment}
          onUpdate={updateComment}
        />
      ))}
      <CommentInput onNewComment={addComment} />
    </div>
  );
};

CommentsContainer.propTypes = {};

export default CommentsContainer;
