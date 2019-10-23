import { formatDistance } from "date-fns";
import React from "react";
import PropTypes from "prop-types";

const formatDate = date =>
  formatDistance(date, Date.now(), { addSuffix: true });

const Comment = ({ name, text, dateAdded, dateEdited }) => {
  const isEdited = dateEdited !== dateAdded;
  const displayDate = formatDate(Math.max(dateAdded, dateEdited));
  const dateText = isEdited ? `Edited ${displayDate}` : `Sent ${displayDate}`;

  return (
    <div className="bg-white w-full rounded shadow p-3 mb-2">
      <span className="text-sm text-gray-600 mb-1 block">{name}</span>
      <p className="mb-1">{text}</p>
      <span className="text-xs text-gray-600 text-right block">{dateText.toUpperCase()}</span>
    </div>
  );
};

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  dateAdded: PropTypes.number.isRequired,
  dateEdited: PropTypes.number.isRequired
};

export default Comment;
