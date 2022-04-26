import React from "react";
import Card from "./React-components/Card";
import Sdata from "./React-components/Sdata";

let ncard = (value, index, array) => {
  // let favSeries = "Amazon Prime";
  let favSeries = "A Netflix Original Series";
  // so now we are making if else statement if user favourite series is "Amazon Prime" then only Amazone prime series will visible else another series will visible
  if (favSeries == value.title) {
    return (
      <Card
        key={value.id}
        imgsrc={value.imgsrc}
        title={value.title}
        sname={value.sname}
        link={value.link}
      />
    );
  } else {
    return 0;
  }
};

function App() {
  return (
    <>
      <h1 className="heading_style">List of top 6 Netflix Series in 2020</h1>
      {Sdata.map(ncard)}
    </>
  );
}

export default App;
