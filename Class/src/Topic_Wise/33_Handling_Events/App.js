import React, { useState } from "react";

function App() {
  let innerText = "Click me";
  let background_color = "#8e44ad";
  const [currentText, newText] = useState(innerText);
  const [currentBackground, newBackground] = useState(background_color);
  let singleClick = () => {
    newText("ouch!! 😒");
    newBackground("#34495e");
  };
  let doubleClick = () => {
    newText("Ayooo!! 😠");
    newBackground("#8e44ad");
  };
  return (
    <>
      <div id="container" style={{ backgroundColor: currentBackground }}>
        <button onClick={singleClick} onDoubleClick={doubleClick}>
          {currentText}
        </button>
      </div>
    </>
  );
}

export default App;
