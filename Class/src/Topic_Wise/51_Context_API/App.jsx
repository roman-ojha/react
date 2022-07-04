import React, { createContext } from "react";

// here we are importing component A and Component A is importing ComponentB and ComponentB is importing ComponentC
import ComponentA from "./components/ComponentA";
/*
    | Parent Component | -> | Child Components A | -> | Child Components B | -> | Child Compnents C |

    so, React hooks provides  a concept call Context. 
    React context API allow you to easily access data at different levels of the components tree, 
    without passing props to every level
          
*/

// here we need as context to create data to pass directly to the child component
// createContext();
// then we need a provider to pass the data
// then after that we need a consumer to consume the data
// step 01: createContext
// step 02: provider
// step 03: consumer

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      {/* Now here we are making a provider  and make sure that component has to come inside the provider component*/}
      <FirstName.Provider value={"Roman"}>
        <LastName.Provider value={"Ojha"}>
          {/* here we have to put the import component inside the provider */}
          <ComponentA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
// now we have to export 'FirstName' component and we will going to imort directly to the ComonentC
export { FirstName, LastName };
