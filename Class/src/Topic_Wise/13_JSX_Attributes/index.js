import React from "react";
import ReactDOM from "react-dom";

/*
To use Attributes of html in JSX we do the same this as we do in HTML:
    <a href="//youtube.com"></a>
But we will called it as JSX Attributes

* Different betweent HTML and JSX Attributes is:
    1) HTML Attributes are not in camelCase but JSX Attributes are in camelCase.
    2) In HTML Element those element which does not have closing tag In this JSX element JSX have closing tag for all element so,
        WE can be able to use it like:
          <img> </img> or <img/>
    3) In HTML if we will not use an useful property for an element it will not through an warning but in case of JSX if we will not use an useful property it will through an worning.
        EX: <img src="https://picsum.photos/200/300" />
          => in this case we are not using alt property because of that React js will through an warning saying that it is useful property.
*/

const name = "roman";
const imgLink1 = "https://picsum.photos/200/300";
const imgLink2 = "https://picsum.photos/250/300";
const imgLink3 = "https://picsum.photos/300/300";
const youtubeLink = "//youtube.com";

ReactDOM.render(
  <>
    <h1 contentEditable="true">My name is {name}</h1>
    <img src={imgLink1} alt="Dummy Image" />
    <img src={imgLink2} alt="Dummy Image" />
    <a href={youtubeLink} target="_blank" rel="noreferrer">
      <img src={imgLink3} alt="Dummy Image" />
    </a>
  </>,
  document.getElementById("root")
);
