import React from "react";
const Searching = ({pageName}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-50 mb-6"></div>
      <p className="text-lg font-semibold">Fetching Upcoming {pageName}...</p>
    </div>
  );
};

export default Searching;
