import React, { useReducer } from "react";

const reducer = (state, action) => {
  // here 'state' is the current state
  // action is the method in which we define what to perform
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
};

const initialState = 0;
const App = () => {
  // as we had already known about the useState(), useReducer() also have the same function but in different way
  const [state, dispatch] = useReducer(reducer, initialState);
  // reducer is the pure function that takes a state and action and return a new state
  // pure function means which doesn't produce any side effect and the function always return the same output if the same arguments are passed
  // initialState is the initial state of the state
  // useReducer return two element 'state' and 'dispatch'
  // here 'state' is the current state
  // 'dispatch' is the function
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
      {/* dispatch work is to triggred the 'action()' method */}
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
    </>
  );
};

export default App;
