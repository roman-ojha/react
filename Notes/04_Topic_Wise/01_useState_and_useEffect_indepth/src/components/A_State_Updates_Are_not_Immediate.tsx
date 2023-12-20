"use client";

import { useState } from "react";

// Example: State Update aren't Immediate
function A_State_Updates_Are_not_Immediate() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // just by calling 1 'setCount' it will work as expected
    setCount(count + 1);
    // when we will call the 'setCount' this is scheduling it's state update, it means that sometime is the future react will update the count variable by 1

    // Same apply to bellow line of code it is scheduling and still using the same 'count' variable value as before
    setCount(count + 1);

    // Now no matter how much you will increase the count by one it will not going to get effected
    setCount(count + 1);
    setCount(count + 1);

    // So, rather then that we can use updater function to update the state
    setCount((prevCount) => prevCount + 1); // here we will get the previous value as the argument, and the previous value will be upto date
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
      </div>
    </>
  );
}

export default A_State_Updates_Are_not_Immediate;
