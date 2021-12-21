import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import OrderList from "./OrderList";

function App() {
  return (
    // Now we are returning one App component Made from other component
    <>
      <Heading />
      <Paragraph />
      <OrderList />
      {/* How we can call this component how much we want */}
      <Paragraph />
    </>
  );
}

export default App;
