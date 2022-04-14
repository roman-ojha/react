import React, { useState } from "react";

const App = () => {
  const [currentValue, updateValue] = useState({
    fname: "",
    lname: "",
    email: "",
    phone_no: "",
  });

  const inputEvent = (e) => {
    let { name, value } = e.target;

    updateValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
        // so here we are saying that those value '...preValue' if that match with the 'name' then add this value in that name
      };
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
            name="fname"
            value={currentValue.fname}
          ></input>
          <input
            type="text"
            className="text"
            placeholder="Enter your Last Name"
            onChange={inputEvent}
            name="lname"
            value={currentValue.lname}
          ></input>
          <input
            type="email"
            className="text"
            placeholder="Enter your Email"
            onChange={inputEvent}
            name="email"
            value={currentValue.email}
          ></input>
          <input
            type="number"
            className="text"
            placeholder="Enter your Phone No."
            onChange={inputEvent}
            name="phone_no"
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
