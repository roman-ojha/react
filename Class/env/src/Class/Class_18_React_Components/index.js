import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
In react we can be able too split the whole code into components and after that we can call those component when we needed
like: Normal JSX:
            <h1>My name is Roman</h1>
            <p>This is my world</p>
            <ol>
              <li>Roman</li>
              <li>Ojha</li>
              <li>Razz</li>
              <li>Roman</li>
            </ol>

      Componenets:
          Component 01:
                       <h1>My name is Roman</h1>
          Component 02: 
                      <p>This is my world</p>
          component 03:
                      <ol>
              <li>Roman</li>
              <li>Ojha</li>
              <li>Razz</li>
              <li>Roman</li>
            </ol>

Rule:
  -> to make a component file the The first file name should be in capital
  -> and this component file will be in .jsx formate
*/

// here we are importing Heading component to use
// React component:
import Heading from "./React-components/Heading";
import Paragraph from "./React-components/Paragraph";
import OrderList from "./React-components/OrderList";
import App from ".App";

ReactDOM.render(
  <>
    {/*  Now here these components will known as element(costom element) */}
    <Heading></Heading>
    <br />
    {/*  Now here we can see that we can make our own JSX element */}
    <Heading />
    <Paragraph />
    <OrderList />

    {/*  Now we cam make another component from these three component */}
    {/* and How here we don't need any of these compnent we just need "App component" */}
    <App />
    <App />
  </>,
  document.getElementById("root")
);
