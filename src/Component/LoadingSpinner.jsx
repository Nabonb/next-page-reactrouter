import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-68px)]">
        <p className="text-8xl">L</p>
        <div className="animate-spin border-8 border-dashed w-20 h-20 rounded-full border-blue-400">
        </div>
        <p className="text-8xl">ading...</p>
    </div>
  );
};

export default LoadingSpinner;
