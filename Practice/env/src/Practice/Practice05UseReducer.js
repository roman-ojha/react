import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type == "UserData") {
    return action.payload;
  }
  return state;
};

const Practice05UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    img: "",
  });
  return (
    <>
      <h1>Name:{state.name}</h1>
      <img src={state.img} alt="img" />
      <button
        onClick={() =>
          dispatch({
            type: "UserData",
            payload: {
              name: "Roman",
              img: "https://image.flaticon.com/icons/png/512/21/21104.png",
            },
          })
        }
      >
        Get
      </button>
    </>
  );
};

export default Practice05UseReducer;
