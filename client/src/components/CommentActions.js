import React from "react";
import classed from "classed-components";

import { useToggle } from "../lib/hooks";
import { OutsideClickTracker } from "./OutsideClickTracker";
import MoreIcon from "./icons/MoreIcon";


const CommentAction = classed.li`py-2 px-4 cursor-pointer hover:text-white`;

const CommentActions = ({ onEdit, onDelete }) => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <OutsideClickTracker onOutsideClick={toggleOpen} active={open}>
      <div className="float-right relative">
        <MoreIcon
          onClick={toggleOpen}
          className="h-4 text-gray-700 cursor-pointer"
        />
        {open && (
          <div className="mt-1 rounded absolute right-0 mr-2">
            <ul className="bg-white rounded shadow-lg border w-32">
              <CommentAction className="hover:bg-green-500 rounded-t" onClick={onEdit}>Edit</CommentAction>
              <CommentAction className="hover:bg-red-700 rounded-b" onClick={onDelete}>Delete</CommentAction>
            </ul>
          </div>
        )}
      </div>
    </OutsideClickTracker>
  );
};

export default CommentActions;
