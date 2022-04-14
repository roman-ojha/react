import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "roman";
const imgLink1 = "https://picsum.photos/200/300";
const imgLink2 = "https://picsum.photos/250/300";
const imgLink3 = "https://picsum.photos/300/300";
const youtubeLink = "//youtube.com";

/* 
    -> there is a slightly different way to use inline CSS in React JS
    -> in the case of HTML we use the same code as we do in CSS
    -> but in case of JSX there is a different:
    -> We have to use inline CSS as an object
        EX: 
            const heading = {
            color: "#fa9191",
            textAlign: "center",
            }
    -> For some kebab-case property in CSS we do 
        ex:text-align
      but, In inline CSS in JSX we have to use it as camelCase 
        ex: textAlign

*/

const heading = {
  color: "#fa9191",
  textAlign: "center",
  textTransform: "capitalize",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9c5",
  margin: "50px 0px",
  fontFamily: '"Josefin Slab",serif',
};

ReactDOM.render(
  <>
    <h1
      style={{
        color: "#fa9191",
        textAlign: "center",
        textTransform: "capitalize",
        fontWeight: "bold",
        textShadow: "0px 2px 4px #ffe9c5",
        margin: "50px 0px",
        fontFamily: '"Josefin Slab",serif',
        // now This is inline Css
      }}
    >
      My name is {name}
    </h1>
    <h1 style={heading}>My name is {name}</h1>
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
