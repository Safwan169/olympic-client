import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
