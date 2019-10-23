import React from "react";
import classed from "classed-components";

const Button = classed.button`
  px-3 py-2 rounded text-white font-semibold focus:outline-none
 
  ${({ isLoading }) => (isLoading ? "bg-gray-400" : "bg-teal-500")}
`;

export default Button;
