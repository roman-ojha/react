import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };

// we just have to provide the type of 'state' & 'action' on reducer parameter and all the other thing will be handle by typescript it will inference all the types for us
const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
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
    </>
  );
};

export default App;
