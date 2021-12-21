import React, { useState } from "react";

const App = () => {
  const [currentValue, updateValue] = useState({
    fname: "",
    lname: "",
    email: "",
    phone_no: "",
  });

  const inputEvent = (e) => {
    // 'e' is as object when take all the attribute from the element tag
    // throught which we are getting 'name' and 'value' of the particular element so that we can be able to identify that which element is 'onChange' right now

    let { name, value } = e.target;
    // here this is object distructuring now we don't have to assign differently like this:
    // const name = e.target.name;
    // const value = e.target.value;

    updateValue((preValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone_no: preValue.phone_no,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone_no: preValue.phone_no,
        };
      } else if (name === "Email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone_no: preValue.phone_no,
        };
      } else if (name === "Phone_no") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone_no: value,
        };
      }
    });
  };

  const submit = (e) => {
    e.preventDefault();
    alert("Form submit");
  };
  return (
    <>
      <div id="container">
        <h1>
          Hello {currentValue.fname} {currentValue.lname}
        </h1>
        <p className="p">{currentValue.email}</p>
        <p className="p">{currentValue.phone_no}</p>
        <form onSubmit={submit}>
          <input
            type="text"
            className="text"
            placeholder="Enter your First Name"
            onChange={inputEvent}
            name="fName"
            value={currentValue.fname}
          ></input>
          <input
            type="text"
            className="text"
            placeholder="Enter your Last Name"
            onChange={inputEvent}
            name="lName"
            value={currentValue.lname}
          ></input>
          <input
            type="email"
            className="text"
            placeholder="Enter your Email"
            onChange={inputEvent}
            name="Email"
            value={currentValue.email}
          ></input>
          <input
            type="number"
            className="text"
            placeholder="Enter your Phone No."
            onChange={inputEvent}
            name="Phone_no"
            value={currentValue.phone_no}
          ></input>
          <button className="submit1" type="submit">
            Submit me 👍
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
