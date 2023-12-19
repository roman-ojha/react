import React from "react";
import ReactDOM from "react-dom";
// Now we have to import CSS file in Js by:
import "./index.css";

// importing module based css
import style from "./app.module.css";

/*
  *) Different we to style in React:
    1) External CSS
    2) Inline & Internal Styling
    3) CSS Modules
        -> there is a file naming convention on using css module
        -> it need to be <file>.module.css
        -> one advantage of using css module is that the classes are locally scoped by default
    4) CSS in JS Libraries
*/

const name = "roman";
const imgLink1 = "https://picsum.photos/200/300";
const imgLink2 = "https://picsum.photos/250/300";
const imgLink3 = "https://picsum.photos/300/300";
const youtubeLink = "//youtube.com";

ReactDOM.render(
  <>
    {/* External CSS */}
    <h1 className="heading">My name is {name}</h1>
    {/* Now here we use "className" In JSX where else we used to use use "class" in HTML 
      because "class" word is reserved for the react 
    */}

    {/* Module Base style */}
    <h1 className={style.heading}>{name}</h1>

    <div className="img">
      <img src={imgLink1} alt="Dummy Image" />
      <img src={imgLink2} alt="Dummy Image" />
      <a href={youtubeLink} target="_blank">
        <img src={imgLink3} alt="Dummy Image" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);
