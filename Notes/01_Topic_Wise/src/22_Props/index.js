import React from "react";
import ReactDOM from "react-dom";
import Card from "./React-components/Card";

/*
  -> When you will go to the inspect of the browser and in Element tag if we click on some element tag then we will see something like :
        == $0 (Use $ in the console to refer to this element)
  so,it means if we will use $0 in the console then we will get the element
  and if we want value then we will use $0.value
  -> here we are using .value bacause value is the attribute of the given element
  -> but we can't use any name which are not the attribute of the given element
  -> but we can make the new attribute for the element which is called as Props
  -> "props" (Which stands for properties)
  -> React props are like function arguments in javaScript and attributes in HTML.
*/

ReactDOM.render(
  <>
    {/* in here Card is a costom element an now we can make the costom attribute
    of it */}
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Original Series"
      sname="DARK"
      link="https://www.netflix.com/np/title/80100172"
    />
    {/* Now here 'imgsrc','title','sname','link' is the costom element of the 'Card' element */}
    <Card
      imgsrc="https://instachronicles.com/wp-content/uploads/2021/01/Extracurricular-netflix-review-1-1200x900.jpg"
      title="A Netflix Original Series"
      sname="Extracurricular"
      link="https://www.netflix.com/np/title/80990668"
    />
    <Card
      imgsrc="https://upload.wikimedia.org/wikipedia/en/7/7a/ST3LambertPoster.png"
      title="A Netflix Original Series"
      sname="Stranger Things"
      link="https://www.netflix.com/np/title/80057281"
    />
  </>,
  document.getElementById("root")
);
