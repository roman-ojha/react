import React, { useState } from "react";

/*
  -> In react we have Controlled and Uncontrolled component 
  -> An input form element whose value is controlled by react in this way is called a "Controlled component".
*/
function App() {
  const [currentText, updateText] = useState("");
  const [currentFullText, updateFullText] = useState("");
  // here in parameter we get the argument of an object which in value
  function inputEvent(event) {
    updateText(event.target.value);
    // now by using we can be able to get the value from the input tag
    // 'value' is the attribute of the input tag which we are getting as an object
  }

  function submitDate(e) {
    e.preventDefault();
    updateFullText(currentText);
    // here we are updating the value that we are getting from the input tag
  }
  return (
    <>
      <div id="container">
        <form onSubmit={submitDate}>
          <h1>Hello {currentFullText}</h1>
          <input
            id="text"
            type="text"
            placeholder="Enter your name"
            // value=""
            // if you will use value in react in this way then you can't be able to write any thing in form

            // defaultValue=""
            // so you have to use 'defaultValue'

            onChange={inputEvent}
            // but here to get the value that we use in form we use 'onChange event' whuch will take a function.
            // this is a control component

            value={currentText}
            // this is called as 'Single source of truth'
            // in a controlled component, form data is handled by a react component.
            // the alternative is uncontrolled componenets, where form data is handled by the DOM itself
            // because we are using 'currentText' here it will update the value while we are typing so we can be able to see it
          ></input>
          <button className="submit1">Click Me 👍</button>
          {/*  in here if we will use 'form' tag then we know that the default bhaviour of the form, that is when we will submit the form page will refresh automatically because of that the result we want is not performing so, if you want to use 'form' tag then you have to use 'preventDefault' which will change the bhaviour of the form tag*/}
        </form>
      </div>
    </>
  );
}

export default App;
