import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/*
Server-side rendering (SSR) is a popular technique for rendering a client-side single page application (SPA) on the server and then sending a fully rendered page to the client. This allows for dynamic components to be served as static HTML markup.
    -> https://www.digitalocean.com/community/tutorials/react-server-side-rendering
*/

/*
    => Type of rendering
        1) Server Side Rendering
            -> all of those jsp,php and asp pages those server pages where we write the html which is the best example of server side rendering
            -> where in that case the html will come to the client from the server after render to the server side
        2) Client Side Rendering
            -> the best example of client side rendering is react js , vue js, anglur 
            -> in this case all the html will generate in the front end from the javascript not from the server end
*/

/*
    => SSR?
        -> (SSR) is a popular technique for rendering a normal client-side app on the server and then sending a fully rendered page to the client.
    => Benefits?
        -> One major benefit of using SSR is in having an app that can be crowled sor Search Engin which help for SEO
        -> SSR can also often help with peroformance because a fully loaded app is sent down from the server on the first request
    => SSR in React.js?
        -> Hydrate instead of render
        -> Use ReactDOMServer renderToString
        -> Simple Express Server 
        -> Configruing webpack & Bable
*/

// First install express:
// -> npm install express

// in index.js file instead of using 'render' we will use 'hydrate'
ReactDOM.hydrate(<App />, document.getElementById("root"));
