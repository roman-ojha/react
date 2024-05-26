"use client";
import { useState } from "react";

const CodeSplittingFunction = (): React.JSX.Element => {
  const [sum, setSum] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          // Let's say that 'sum' function is heavy and we don't want to import that function at the top rather we will import dynamically whenever we will click the button
          // this import return promises
          // NOTE that this file will get lazy loaded means react will not fetch this file on the first website call rather this file will get network call only after we will click this button
          import("@/components/CodeSplittingFunction/sum")
            .then((module) => {
              // this promise will going to have module object inside of it,
              // this module object will going to have properties like:
              // module.default which is the default export
              // module.<name> which is the other export that we have done from that file
              setSum(module.default(2, 2));
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Add 2 + 2
      </button>
      <h1>Sum: {sum}</h1>
    </>
  );
};

export default CodeSplittingFunction;
