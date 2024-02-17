import React from "react";
import loading from "../assets/loading.gif";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="flex items-center justify-center bg-white rounded-lg p-8">
        <img src={loading} alt="loading" width={100} height={100} />
      </div>
    </div>
  );
};

export default Loader;
