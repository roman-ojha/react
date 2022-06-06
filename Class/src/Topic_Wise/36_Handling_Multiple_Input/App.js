import React, { useState } from "react";

// The process that we did in the past to use form now, we have another simple process using object

function App() {
  const [fullName, updateFullName] = useState({
    fname: "",
    lname: "",
  });
  // here we can see that 'useState()' can also pass the object

  function inputEvent(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    // here we can see that instade of 'value' we use 'name' because we had alrady use name attribute in input tag so we are getting that through 'event' parameter
    // so now we can use 'placeholder' attribute in here as well
    console.log(event.target.placeholder);
    // this is possible because 'form' tag is handling by React and called as React Controlled
    console.log(event.target.className);
    // we now we can get any attribute from the input tag

    const value = event.target.value;
    const name = event.target.name;
    updateFullName((preValue) => {
      // here we are using call back function
      // here 'preValue' is the previous value of the state which is the object
      // console.log(preValue);

      if (name == "fName") {
        // here we are conforming that from which input we are getting getting value
        return {
          fname: value,
          lname: preValue.lname,
        };
        // so here we are assigning the first name that we are getting from the 'value'
        // and at that time we are assigning the last name to previous value which is empty
        // and also we have to return this value
      } else if (name == "lName") {
        return {
          fname: preValue.fname,
          // but in here the previous value had been changed to the value that we had set in if condition
          lname: value,
        };
      }
    });
  }

  return (
    <>
      <div id="container">
        <form>
          <h1>
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <p>Email</p>
          <input
            className="text"
            type="text"
            placeholder="Enter you First Name"
            name="fName"
            // now we are using 'name' attribute to do that
            onChange={inputEvent}
            // but now we can see in all the on change event we are calling the same function
            value={fullName.fname}
            // so here we are accessing object value
          ></input>
          <input
            className="text"
            type="text"
            placeholder="Enter your Last Name"
            name="lName"
            onChange={inputEvent}
            value={fullName.lname}
          ></input>
          <input
            className="text"
            type="text"
            placeholder="Enter your Emali"
            name=""
            onChange={inputEvent}
          ></input>
        </form>
      </div>
    </>
  );
}

export default App;
