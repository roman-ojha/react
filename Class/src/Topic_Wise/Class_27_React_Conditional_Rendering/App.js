import React from "react";
import Netflix from "./React-components/Netflix";
import Amazon from "./React-components/Amazon";

let favSeries = "netflix";

function App() {
  return (
    <>
      <h1 className="heading_style">List of top 6 Netflix Series in 2020</h1>
      {favSeries == "netflix" ? <Netflix /> : <Amazon />}
      {/*  now in conditional operator we don't even have to use return it will automatically understand */}
    </>
  );
}

export default App;
