import React, { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  function multiCount() {
    // if we are updating the 'count' state value then this function need to call so that it can re return the new value
    // but when we are change/updating the value of 'item' state then also by default this function will get called which we don't want because this function is not depend of 'item' state value
    // and that will reduce the performance of the application
    // in that case we will use 'useMemo'
    console.log("multiCount");
    return count * 5;
  }

  const multiCountMemo = useMemo(() => {
    // now we have added function inside the 'useMemo' hooks
    // we have to pass the parameter inside [] list which will determine when to run this function
    console.log("multiCountMemo");
    return count * 5;
    // here now this function is depend only on 'count' state [count] so it means that this function will only get called when 'count' state will get change
  }, [count]);

  return (
    <>
      <h1>Count {count}</h1>
      <h1>MultiCount {multiCount()}</h1>
      <h1>MultiCountMemo {multiCountMemo}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <h1>Item {item}</h1>
      <button
        onClick={() => {
          setItem(item * 10);
        }}
      >
        Update Item
      </button>
    </>
  );
};

export default App;
