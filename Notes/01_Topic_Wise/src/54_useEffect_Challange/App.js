import React, { useEffect, useState } from "react";

// Challenge: by using useEffect change the state of the title after render

const App = () => {
  const [newdata, updateNew] = useState(0);
  useEffect(() => {
    document.title = `You click me ${newdata} Times`;
  });
  return (
    <>
      <button
        onClick={() => {
          updateNew(newdata + 1);
        }}
        style={{ width: "200px", height: "100px", "font-size": "20px" }}
      >
        {" "}
        click me {newdata}
      </button>
    </>
  );
};

export default App;
