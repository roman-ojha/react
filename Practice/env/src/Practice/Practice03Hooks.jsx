import React, { createContext } from "react";
import IncParent from "../React-components/Practice_02/IncParent";

const increment = createContext();
const decrement = createContext();

const Practice03Hooks = () => {
  return (
    <>
      <increment.Provider value={5}>
        <decrement.Provider value={10}>
          <IncParent />
        </decrement.Provider>
      </increment.Provider>
    </>
  );
};

export default Practice03Hooks;
export { increment, decrement };
