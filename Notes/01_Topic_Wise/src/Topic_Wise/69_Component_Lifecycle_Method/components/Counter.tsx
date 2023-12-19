import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // componentDidMount
  useEffect(() => {
    // this function will get called when component get mount because we have use [] empty array is says that on every state/props value got change which need to render the component on the mounting phase this function will get called
    console.log("component get mount");
  }, []);

  // // componentDidUpdate
  useEffect(() => {
    // this function will get called when component get update or the given state variable inside the [](array) get changed
    console.log("component get update");
  }, [count, count2]);

  // componentWillUnmount
  useEffect(() => {
    console.log("component get mount");
    return () => {
      // use effect return the function which get called when component get unmount
      console.log("component get unmount");
    };
  }, []);

  //   useEffect(() => {
  //     console.log(`The count has updated to ${count}`);
  //     return () => {
  //       console.log(`we are in the cleanup - the count is ${count}`);
  //     };
  //   }, [count]);

  return (
    <div>
      <h6> Counter </h6>
      <p> current count: {count} </p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>
      <button onClick={() => setCount2(count2 + 1)}>increment count 2</button>
      {/* in here we are using 'setCount' & 'setCount2' change the state of the component in this case component get rerender or updating phase */}
    </div>
  );
};

export default Counter;
