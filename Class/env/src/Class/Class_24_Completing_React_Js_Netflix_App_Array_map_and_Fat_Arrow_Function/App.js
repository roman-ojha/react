import React from "react";
import Card from "./React-components/Card";
import Sdata from "./React-components/Sdata";

let ncard = (value, index, array) => {
  // here value argument is the value of the 'Sdata' Array that we are getting from the callback function
  // 'index' is the specific index number of inside the 'Sdata' Array
  // And 'array' is , Which array we are working with
  return (
    <Card
      imgsrc={value.imgsrc}
      title={value.title}
      sname={value.sname}
      link={value.link}
    />
    // now we are accessing value if all data the data using 'value'
    // Remember, Map method meeds a unique key. Keys are necessary to improve performace of you React app.
  );
};

function App() {
  return (
    <>
      <h1 className="heading_style">List of top 6 Netflix Series in 2020</h1>
      {Sdata.map(ncard)}
      {/* Here we are passing callback function 'ncard' as an argument in map function */}

      {/* Another Method */}
      {/* 
    
    {Sdata.map((value) => {
      return (
        <Card
          imgsrc={value.imgsrc}
          title={value.title}
          sname={value.sname}
          link={value.link}
        />
      );
    })} 
    
    */}
    </>
  );
}

export default App;
