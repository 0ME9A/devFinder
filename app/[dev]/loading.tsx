import BasicLoading from "../../src/Components/loaders/Loading";
import Searchbox from "../../src/Components/Searchbox";
import Menu from "../../src/Components/menu/Menu";
import React from "react";

function Loading() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-2xl w-full p-2 mx-auto space-y-4">
          <Menu />
          <Searchbox />
          <div
            className={`flex flex-col sm:flex-row rounded-2xl  sm:gap-4 bg-white dark:bg-navy-700 p-4 sm:p-8`}
          >
            <BasicLoading />
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
