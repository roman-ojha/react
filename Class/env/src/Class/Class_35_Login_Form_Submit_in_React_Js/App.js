import React, { useState } from "react";

function App() {
  const [currentFirstText, updateFirstText] = useState("");
  const [currentLastText, updateLastText] = useState("");
  const [currentFirstName, updateFirstName] = useState("");
  const [currentLastName, updateLastName] = useState("");

  function firstInputEvent(event) {
    updateFirstText(event.target.value);
  }

  function secondInputEvent(event) {
    updateLastText(event.target.value);
  }

  function submitData(e) {
    e.preventDefault();
    updateFirstName(currentFirstText);
    updateLastName(currentLastText);
  }
  return (
    <>
      <div id="container">
        <form onSubmit={submitData}>
          <h1>
            Hello {currentFirstName} {currentLastName}
          </h1>
          <input
            className="text"
            type="text"
            placeholder="First name"
            onChange={firstInputEvent}
            value={currentFirstText}
          ></input>
          <input
            className="text"
            type="text"
            placeholder="Last name"
            onChange={secondInputEvent}
            value={currentLastText}
          ></input>
          <button className="submit1">Click Me 👍</button>
        </form>
      </div>
    </>
  );
}

export default App;
