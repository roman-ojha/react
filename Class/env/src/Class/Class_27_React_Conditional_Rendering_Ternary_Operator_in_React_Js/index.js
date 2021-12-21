import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

/*
#Ternaary Operator
    -> Condition ? exprlfTrue : exprifFalse

    * Parameters:
        -> condition  : an expression whose value is used as a condition.
        -> exprifTure : An expression which is evaluted if the condition evaluates to a truthy value(one which equals or can be converted to true).
        -> exprifFalse: An expression which is executed if the condition is falsy (that is, has va value which can be converted to false).
*/

ReactDOM.render(<App />, document.getElementById("root"));
