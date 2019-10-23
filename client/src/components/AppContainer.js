import React from "react";

const AppContainer = ({ children }) => {
  return (
    <div className="h-screen bg-teal-100 py-20 text-gray-800 font-sans">
      <div className="flex h-full w-1/3 m-auto">{children}</div>
    </div>
  );
};

export default AppContainer;
