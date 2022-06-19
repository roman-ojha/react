import React from "react";
import Heading from "./React-components/Heading";
import Paragraph from "./React-components/Paragraph";
import OrderList from "./React-components/OrderList";

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
