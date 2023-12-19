import React, { createContext } from "react";

import ComponentA from "./React-components/ComponentA";

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
