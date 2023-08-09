import React from "react";

const Rff = (props) => {
  return (
    <div className={`column rff`}>
      <div className="row repo">
        <h1>repo</h1>
        <h2>{props.repo}</h2>
      </div>
      <div className="row followers">
        <h1>followers</h1>
        <h2>{props.follower}</h2>
      </div>
      <div className="row following">
        <h1>following</h1>
        <h2>{props.following}</h2>
      </div>
    </div>
  );
};

export default Rff;
