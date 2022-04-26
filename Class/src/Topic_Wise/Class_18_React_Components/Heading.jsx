import React from "react";

// We have to make a function of same name as the name of the component
function Heading() {
  return <h1>My name is Roman</h1>;
}

// to access the Heading() function in the main index.js file
// in node there is a functionality called import and export
// import means importing and export means exporting

export default Heading;
// we are making it default because we don't have another function rather then Heading
// we will not use () be in react this is a component;
// and if we will use Heading() then then this Heading function will get called on the spot
