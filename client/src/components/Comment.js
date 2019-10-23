import React, { useEffect, useRef, useState } from "react";
import classed from "classed-components";
import { formatDistance } from "date-fns";
import PropTypes from "prop-types";
import { useToggle } from "../lib/hooks";
import CommentActions from "./CommentActions";
import TextArea from "./TextArea";
import Button from "./Button";

const formatDate = date =>
  formatDistance(date, Date.now(), { addSuffix: true });

const CommentCard = classed.div`bg-white w-full rounded shadow p-3 pt-4 mb-2`;

const CommentEditExit = props => (
  <span
    className="text-gray-600 font-bold float-right -mt-2 cursor-pointer text-lg"
    {...props}
  >
    x
  </span>
);

const CommentAuthor = ({ comment }) => (
  <span className="text-sm text-gray-600 mb-1 block">{comment.name}</span>
);

const CommentEdit = ({ comment, onUpdate, onExitEdit }) => {
  const [text, setText] = useState(comment.text);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleSave = () =>
    text.length === 0
      ? alert("Comment can't be empty")
      : onUpdate({ ...comment, text }).then(onExitEdit);

  return (
    <CommentCard>
      <CommentEditExit onClick={onExitEdit} />
      <CommentAuthor comment={comment} />
      <TextArea ref={ref} value={text} onChange={setText} />
      <div className="text-right">
        <Button onClick={handleSave}>Save</Button>
      </div>
    </CommentCard>
  );
};

const Comment = ({ comment, onDelete, onUpdate }) => {
  const [editMode, toggleEditMode] = useToggle(false);

  const { id, name, text, dateAdded, dateEdited } = comment;
  const isEdited = dateEdited !== dateAdded;
  const displayDate = formatDate(Math.max(dateAdded, dateEdited));
  const dateText = isEdited ? `Edited ${displayDate}` : `Sent ${displayDate}`;

  if (editMode) {
    return (
      <CommentEdit
        comment={comment}
        onUpdate={onUpdate}
        onExitEdit={toggleEditMode}
      />
    );
  }

  return (
    <CommentCard comment={comment}>
      <CommentActions onDelete={() => onDelete(id)} onEdit={toggleEditMode} />
      <CommentAuthor comment={comment} />
      <p>{text}</p>
      <span className="text-xs text-gray-600 text-right block">
        {dateText.toUpperCase()}
      </span>
    </CommentCard>
  );
};

export default Comment;
