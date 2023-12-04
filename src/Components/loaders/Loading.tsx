import React from "react";

function BasicLoading() {
  return (
    <>
      <div className="w-full flex items-center justify-center gap-3 py-4 p-2">
        <div className="w-5 aspect-square border-2 rounded-full border-b-blue-500 animate-spin"></div>
        <strong className="animate-pulse text-center ">Loading...</strong>
      </div>
    </>
  );
}

export default BasicLoading;
