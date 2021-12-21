import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  // Hooks can only be called inside of the body of a function component.
  // here in state we are getting array in the form of:
  /*
              [undefined, f]
              0: undefined
              1: f()
              __proto__: Array

    #Array Destructuring
          const name = ['r','o','m','a','n'];
              // this is the array so, to access the array we use to do this:
              // name[0], name[1] // but now in array destructuring

          const [name1, name2, name3, name4, name5] = name;
              // now we had assign every value of array in every variable "name1, name2, etc...."
              // now, we can be able to use it buy using the variable name
              // name1, name2, name3

    -> so we had alrady seen that [undefined, f]
    -> use state is an array which return two items where [undefined] is called as state object and another [f] is called as updated function
    -> so,
            Current data, updated date = initial data
    -> when we are passing value to 'useState(value)' function then it is called as initial data
    - so, we have:
                  const [count, setCount] = useState(5);
                            |       |                |
                    current data  updated data    initial data
    -> so because of that we can be able to change the state

    -> Step 1: firstly 'useState()' value will assign to the count because of that firstly 'count' value will become value of 'useState(value)'
    -> Step 2: now that value which we will pass to the 'setCount(value)' that value will become the another value of 'count'
  */

  const IncNum = () => {
    // count++;
    // in functional component we cant be able to change the state every time this is the problem of function component
    // because of that people use to use class component
    // but now we have a concept of hooks so, now we don't even have to use class component
    // now you can change the state using Hooks

    setCount(count - 1);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click Me</button>
        {/* In HTML: onclick=function()
            In JSX : onClick=function */}
      </div>
    </>
  );
};

export default App;
