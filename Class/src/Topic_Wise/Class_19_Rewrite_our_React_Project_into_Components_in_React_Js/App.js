import React from "react";

function App() {
  let Time = new Date().getHours();
  Time = Number(Time);
  let updateMessage;
  let updateColor = {};
  if (Time >= 1 && Time <= 11) {
    updateMessage = "Good Morning";
    updateColor.color = "Green";
  } else if (Time >= 12 && Time <= 19) {
    updateMessage = "Good Afternoon";
    updateColor.color = "Orange";
  } else {
    updateMessage = "Good Night";
    updateColor.color = "Black";
  }
  return (
    <>
      <div id="container">
        <h1 id="message">Hello sir, </h1>
        <h1 id="messageUpdate" style={updateColor}>
          {" "}
          &nbsp;{updateMessage}
        </h1>
      </div>
    </>
  );
}

export default App;
