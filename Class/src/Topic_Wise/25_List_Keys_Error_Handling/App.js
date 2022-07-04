import React from "react";
import Card from "./React-components/Card";
import Sdata from "./React-components/Sdata";

let ncard = (value, index, array) => {
  return (
    <Card
      key={value.id}
      // key in react identify which item in a list have changed or added or removed and placed a crucial role in handling UI update efficiently
      // here this is the key for every component that have to be unique
      // NOTE = here we have to use 'key' not other name is allowed to use to make every element different
      // also key props is now accessible to child component
      // what we need it: https://youtu.be/0sasRxl35_8?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&t=236
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
