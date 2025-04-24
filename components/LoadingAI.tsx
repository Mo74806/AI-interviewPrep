import React from "react";

const LoadingAI = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="w-24 h-24 relative flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full border-4 border-white/10 animate-ping"></div>
        <div className="absolute w-full h-full rounded-full border-4 border-white/20 animate-spin-slow"></div>
        <div className="w-6 h-6 bg-white rounded-full z-10 shadow-lg animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingAI;
