import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction1 = {
  // here we have set action action to string, which is still not a strict type because we can add any string value inside 'type'
  type: "INCREMENT" | "DECREMENT" | "RESET";
  payload?: number;
  // Reset type doesn't need an payload for that we can use optional for payload
  // but providing the optional type might not be good for other Increment and decrement type Increment and Decrement type needs the payload, and typescript will understand payload could be undefine
};

// in that case Let's create a type just for increment and decrement action
type UpdateAction = {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
};
// And let's create a action type just for Reset
type ResetAction = {
  type: "RESET";
  // Here we ignore payload
};
// now let's create a new type from the create above types
type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: 10 });
        }}
      >
        Increment 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", payload: 10 });
        }}
      >
        Decrement 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </>
  );
};

export default App;
