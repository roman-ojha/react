import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/*
  -> router doesn't comes in built in you have to install it 
*/

/*
  -> as we used to see while using website, when we go to the another page the whole page will going to get refresh it means all the page will going to come from the server again,
  -> but, for an example purpose, we can see the http://www.facebook.com which is made upof react where if we want to go to the another page the whole page will not going to reload but just the component of the certain part of the page will going to reload that is the power of react router
  -> server side rendering = server site rendering means all the page will going to render when we are doing action
  -> client side rendering = client site rendering means when you are performing task or trying to go to the another page then that render will happen in the client site

  -> learn more: https://www.freecodecamp.org/news/react-router-in-5-minutes/
*/

/*
  # Step: first install react-router-dom:
            npm install react-router-dom
    1) Step 01: You'll need to import BrowserRouter, Route, and Switch from react-router-dom package:
            import React, { Component } from 'react';
            import { BrowserRouter, Route, Switch } from 'react-router-dom';
    2) Step 02: First, you'll need to set up your app to work with React Router. Everything that gets rendered will need to go inside the <BrowserRouter> element, so wrap you App in those first. it's the component that does all the logic of displaying various components that you provide it with.
            // index.js
            ReactDOM.render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>, 
                document.getElementById('root')
            )
    3) Step 03: Next, in your App component, add the Switch element (open and closing tags). These ensure that only one component is rendered at a time. If we don't use this, we can default to the Error component, which we're going to write later.
            function App() {
                return (
                    <main>
                        <Switch>
                            
                        </Switch>
                    </main>
                )
            }


*/

// importing essiential module from the 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      {/* we have to include all the component that we want to do render*/}
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
