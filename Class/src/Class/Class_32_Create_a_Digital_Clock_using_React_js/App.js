import React, { useState } from "react";

const App = () => {
  let getTime = new Date().toLocaleTimeString();
  const [currentTime, settime] = useState(getTime);

  setInterval(() => {
    settime(new Date().toLocaleTimeString());
  }, 1000);
  return <h1>{currentTime}</h1>;
};

export default App;
