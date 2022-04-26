import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Tooltip from "@material-ui/core/Tooltip";

/*
  -> now we can use Mterial ui as well
  -> to do you have to search 'Material ui npm' in browser  
  -> and go to app directroy then type: 
      -> npm install @material-ui/core
  -> if you will see :
    -> "@material-ui/core": "^4.11.4",
  -> it means material ui have installed
  -> and to use material ui search 'matrial us' in browser then you have a result to use material ui
  -> https://material-ui.com/ is also the material ui website
  -> now we have to import liek material ui icon
 */

const App = () => {
  const [currentValue, updateValue] = useState(0);
  const increment = () => {
    updateValue(currentValue + 1);
  };
  const decrement = () => {
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
          <Tooltip title="add">
            <Button id="button_inc" onClick={increment}>
              <AddCircleOutlineIcon style={{ fontSize: "40px" }} />
              {/* <AddCircleIcon fontSize="large" /> */}
            </Button>
          </Tooltip>
          <Tooltip title="delete">
            <Button id="button_dec" onClick={decrement}>
              <DeleteIcon style={{ fontSize: "40px" }} />
              {/* <IndeterminateCheckBoxIcon fontSize="large" /> */}
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default App;
