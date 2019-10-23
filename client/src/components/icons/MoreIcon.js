import React from "react";
import classNames from "classnames";

const MoreIcon = ({ className, ...rest }) => {
  className = classNames(className, "fill-current");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ transform: "rotate(90deg)" }}
      className={className}
      {...rest}
    >
      <path
        d="M4 15a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2zm8 2a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2zm8 2a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"
        className="heroicon-ui"
      />
    </svg>
  );
};

export default MoreIcon;
