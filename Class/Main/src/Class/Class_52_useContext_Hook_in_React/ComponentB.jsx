import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { FirstName, LastName } from "../App";

const ComponentB = () => {
  // so here we are using useContext() hooks it means it have to be inside the function and at the top
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <h1>
      My name is {fname} {lname}
    </h1>
  );
};

export default ComponentB;
