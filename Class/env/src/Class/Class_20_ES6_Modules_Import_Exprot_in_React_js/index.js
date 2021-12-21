import React from "react";
import ReactDOM from "react-dom";
import Roman, { favprog, myName, myNames } from "./App";
// when we are importing the data, We are getting the data in object form
// in the 'import Roman' section we can use any name like: 'import RomanOjha' because we are exporting the data in default form
// so, Now while importing without uses of 'export default' we have to use the same name to import that data

/*
  ->but if we want to import all the data using one name then insted of using:
          import Roman, { favprog, myName, myNames } from "./App";
    we can use:
          import * as Roman from "./App";

    // it means all the export that we are doing are importing or fatching by one 
    // if we are importing like this then it will be as an object
*/
import * as ques from "./App";
// But a lot of people not use this method
ReactDOM.render(
  <>
    {/*
     <ol>
      <li>Roman</li>
      <li>{Roman}</li>
      <li>{favprog}</li>
      <li>{myName()}</li>
      <li>{myNames()}</li>
    </ol> 
    */}
    {/* if we are importing through ques then we have to access through an object name 'ques' */}
    <ol>
      <li>Roman</li>
      <li>{ques.default}</li>
      {/* And in here we have to use default name rather then Roman because it is a default data */}
      <li>{ques.favprog}</li>
      <li>{ques.myName()}</li>
      <li>{ques.myNames()}</li>
    </ol>
  </>,
  document.getElementById("root")
);
