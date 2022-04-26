import React from "react";
import ReactDOM from "react-dom";
// Now we have to import CSS file in Js by:
import "./index.css";

const name = "roman";
const imgLink1 = "https://picsum.photos/200/300";
const imgLink2 = "https://picsum.photos/250/300";
const imgLink3 = "https://picsum.photos/300/300";
const youtubeLink = "//youtube.com";

ReactDOM.render(
  <>
    <h1 className="heading">My name is {name}</h1>
    {/* Now here we use "className" In JSX where else we used to use use "class" in HTML 
      because "class" word is reserved for the react 
    */}
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
