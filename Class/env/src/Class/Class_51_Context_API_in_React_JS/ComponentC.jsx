import React from "react";
// while exporting as an {FirstName} we also have to improt same like that {FirstName}
import { FirstName, LastName } from "../App";

const ComponentC = () => {
  return (
    <>
      {/* So here now we have to use cunsumer because this component is the consumer */}
      {/* So NOTE that consumer need the function */}
      <FirstName.Consumer>
        {/*  The attribute that we pass from the provider we will get that value as an parameter inside the consumer function */}
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  // so here we can see that the if we will pass the data from provider a lot the this code will going to be mess so we can imporve it
                  <h1>
                    My name is {fname} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

// we are exporting the componentC and importing this component to the ComponentB
export default ComponentC;
