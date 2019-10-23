import React from "react";

const AppContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-teal-100 text-gray-800 font-sans min-h-full">
      <h1 className="text-2xl pt-8 text-center text-teal-800 font-bold">CommentsApp</h1>
      <div className="flex flex-col py-8 min-h-full w-1/3 m-auto">{children}</div>
    </div>
  );
};

export default AppContainer;
