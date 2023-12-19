import React, { useContext } from "react";
// while exporting as an {FirstName} we also have to improt same like that {FirstName}
import { FirstName, LastName } from "../App";

const ComponentC = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      {/* so here we can see that the if we will pass the data from provider a
      lot then this code will going to be mess so we can imporve it by using
      useContext  and the solution is in 'ComponentB'*/}
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
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

export default ComponentC;
