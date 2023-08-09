import React from "react";
import "../sass/style.sass";

export const Loading = (props) => {
  return (
    <>
      <div className="loading">
        <strong className={`${props.theme}-txt`}>Loading...</strong>
      </div>
    </>
  );
};
