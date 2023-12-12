import DevHistoryContainer from "@/components/dev/history/DevHistoryContainer";
import Menu from "@/components/menu/Menu";
import React from "react";

function page() {
  return (
    <>
      <div className="py-5 p-2">
        <Menu />
      </div>
      <DevHistoryContainer isSolo={true} />
    </>
  );
}

export default page;
