"use client";
import React, { useCallback, useState } from "react";
import List from "./List";

const UseCallbackHook = (): React.JSX.Element => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // we will image that this is the API operation that react request on the server.

  const getItems = useCallback(
    (incrementor: number) => {
      return [
        number + incrementor,
        number + incrementor + 1,
        number + incrementor + 2,
      ];
      // so, whenever we will set on 'setDark' function this 'getItem' function will get recreated every single time we render our 'UseCallbackHook' component
      // so, whenever we will recreate 'getItem' function which will going to the be new instance of a function.so, each time 'UseCallbackHook' component will get create this 'getItem' function will get recreated
      // so in this kind of the cases we would use 'useCallback' hook
      // so, what 'useCallback' does is it will not rerun the code inside of it unless certain parameters change. so, it means that ever single time 'UseCallbackHook' component get created, this 'getItem' function will only going to update when it actually needs to
      // useCallback(<callback_function>, [<dependencies>])
      // dependencies: in this case this function depends on is 'number'
    },
    [number]
  );
  // so, now this 'useCallback' hook will only recreate 'getItems' function only after 'number' value changes

  // different between 'useMemo' and 'useCallback' is 'useMemo' return to you the return value of the function but 'useCallback' takes the function it return the function that we passes which help us to use as a return function which help us to pass parameter inside the function

  // another case where you can use 'useCallback' hooks where those function which creation would be really slow
  // but majority of the time we will use it on referential equality function like in List component we have 'useEffect' inside the dependency array it have 'getItems' function so, whenever the instance of 'getItems' will get change the 'useEffect' function will again get called which is going be a problem

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <button
        onClick={() => {
          setDark((prev) => !prev);
        }}
      >
        Toggle theme
      </button>
      <List getItem={getItems} />
    </div>
  );
};

export default UseCallbackHook;
