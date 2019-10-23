import React from "react";

const AppContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-teal-100 py-20 text-gray-800 font-sans min-h-full">
      <div className="flex min-h-full w-1/3 m-auto">{children}</div>
    </div>
  );
};

export default AppContainer;
