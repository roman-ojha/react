import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
const app = express();
const PORT = 8000;
app.use("^/$", (req, res, next) => {
  // '^' symbole of bigining of the line
  // '$' symbole of end of the line
  // now before we do the next step we have to build the react application
  // now we will read our build index.html file
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      // if error occure
      console.log(err);
      return res.status(500).send("Some error happend");
    }
    // if error did not occure then send the index.html
    // but we have to replace the mouting point
    // mounting point in our case is <div id="root"></div>
    // here data are the text content from the index.html
    return res.send(
      // in order for to render layer server side we need three things
      // 1) react => import React from 'react';
      // 2) react-dom => import ReactDOMServer from 'react-dom/server';
      // 3) App => import App from '../src/App';
      data.replace(
        '<div id="root"></div>',
        // here we are replacing the mounting point div with contents of our render application
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
        // so first render will go to string and we will put it inside of our 'root' div
        // now we need to change another thing in react application
        // in index.js file instead of using 'render' we will use 'hydrate'
      )
    );
  });
});
// one last thing we also want to serve all the static file build folder
app.use(express.static(path.resolve(__dirname, "..", "build")));

// before we can lunch our application we need to add server side support for jsx
// so for that we need to add 'babel'
// => npm i @babel/preset-env @babel/preset-react @babel/register ignore-styles

// now lets add babel support
// in a server folder create new file called index.js

app.listen(PORT, () => {
  console.log(`App lunched on ${PORT}`);
});
