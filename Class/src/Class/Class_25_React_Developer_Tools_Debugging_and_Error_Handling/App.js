import React from "react";
import Card from "./React-components/Card";
import Sdata from "./React-components/Sdata";

let ncard = (value, index, array) => {
  return (
    <Card
      key={value.id}
      // here this is the key for every component that have to be unique
      // NOTE = here we have to use 'key' not other name is allowed to use to make every element different
      imgsrc={value.imgsrc}
      title={value.title}
      sname={value.sname}
      link={value.link}
    />
  );
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
