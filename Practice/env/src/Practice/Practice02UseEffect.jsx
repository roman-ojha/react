import React, { useEffect } from "react";

function Practice02UseEffect() {
  let myName = "";
  useEffect(() => {
    myName = "RomanOjha";
  });
  return (
    <>
      <h1>{myName}</h1>
    </>
  );
}

export default Practice02UseEffect;
