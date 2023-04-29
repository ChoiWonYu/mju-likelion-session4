import React from "react";

const UseState = () => {
  let count = 0;

  const handleClick = () => {
    count++;
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default UseState;
