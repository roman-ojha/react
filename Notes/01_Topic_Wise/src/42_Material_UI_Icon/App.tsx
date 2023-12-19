import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

/*
NOTE: you can also add font awesome icon to do that you can to search 'font awsome icons'
      -> but material ui icon is easier to use
*/

/*
  -> you have to search  'material ui icons npm' in browser 
  -> now we can use material ui icons by using 'npm'
    -> EX: // with npm
          npm install @material-ui/icons
  -> now you just have to go to the environment path using cmd
  -> you have to enter "npm install @material-ui/icons"
  -> If you are not already using Material-UI in your project, you can add it with:
    -> by using this we can add nav bar, header, footer etc...
    -> // with npm
      npm install @material-ui/core
  -> how we can see the 'dependencies' in 'Package.json'
  -> if you will see this:
      ->"@material-ui/core": "^4.11.4",
        "@material-ui/icons": "^4.11.2",
        "@testing-library/jest-dom": "^5.14.1",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^12.8.3",
  -> then your material icon had installed
  -> now you have to search 'material ui icons' in browser
  -> now when we import material ui icons in a project we know that that is called as a component

*/

const App = (): JSX.Element => {
  const [currentValue, updateValue] = useState<number>(0);
  const increment = (): void => {
    updateValue(currentValue + 1);
  };
  const decrement = (): void => {
    if (currentValue > 0) {
      updateValue(currentValue - 1);
    } else {
      window.alert("Sorry, Zero limit Riched");
    }
  };
  return (
    <>
      <div id="container_body">
        <div id="main_container">
          <div id="nav_value">
            <h1>{currentValue}</h1>
          </div>
          <button id="increment_button" onClick={increment}>
            <AddCircleIcon style={{ fontSize: "40px" }} />
            {/* <AddCircleIcon fontSize="large" /> */}
          </button>
          <button id="decrement_button" onClick={decrement}>
            <IndeterminateCheckBoxIcon style={{ fontSize: "40px" }} />
            {/* <IndeterminateCheckBoxIcon fontSize="large" /> */}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
