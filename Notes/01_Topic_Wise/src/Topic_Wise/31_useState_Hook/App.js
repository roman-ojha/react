import React, { useState } from "react";

const App = () => {
  let getTime = new Date().toLocaleTimeString();
  const [CurrentTime, upgradeTime] = useState(getTime);
  const upTime = () => {
    upgradeTime(new Date().toLocaleTimeString());
  };
  return (
    <>
      <h1>{CurrentTime}</h1>
      <button onClick={upTime}>Get Time</button>
    </>
  );
};

export default App;
