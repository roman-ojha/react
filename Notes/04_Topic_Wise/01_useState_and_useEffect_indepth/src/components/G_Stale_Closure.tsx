"use client";
import React, { useEffect, useState } from "react";

// Explanation: https://youtu.be/-yIsQPp31L0?t=1989
const GStaleClosure = (): React.JSX.Element => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("Interval function running...");
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, [count]);

  // Another way:
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Interval function running...");
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  return <></>;
};

export default GStaleClosure;
