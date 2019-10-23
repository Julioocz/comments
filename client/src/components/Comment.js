import { formatDistance } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import MoreIcon from "./icons/MoreIcon";
import { useToggle } from "../lib/hooks";
import { OutsideClickTracker } from "./OutsideClickTracker";
import CommentActions from "./CommentActions";

const formatDate = date =>
  formatDistance(date, Date.now(), { addSuffix: true });


const Comment = ({ id, name, text, dateAdded, dateEdited, onDelete }) => {
  const isEdited = dateEdited !== dateAdded;
  const displayDate = formatDate(Math.max(dateAdded, dateEdited));
  const dateText = isEdited ? `Edited ${displayDate}` : `Sent ${displayDate}`;

  return (
    <div className="bg-white w-full rounded shadow p-3 pt-4 mb-2">
      <CommentActions onDelete={() => onDelete(id)} />

      <span className="text-sm text-gray-600 mb-1 block">{name}</span>
      <p>{text}</p>
      <span className="text-xs text-gray-600 text-right block">
        {dateText.toUpperCase()}
      </span>
    </div>
  );
};

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  dateAdded: PropTypes.number.isRequired,
  dateEdited: PropTypes.number.isRequired
};

export default Comment;
