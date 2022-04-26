import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

/*
    -> Now in this code in console we will see an error saying:

            !! Warning: Each child in a list should have a unique "key" prop.
    -> Notice here that the warning is about using a unique key.
    -> Keys are necessary to improve performance of your React app
React Developer tools:
    -> to sue React component in developer tools you have to download the extension to the browser
*/

ReactDOM.render(<App />, document.getElementById("root"));
