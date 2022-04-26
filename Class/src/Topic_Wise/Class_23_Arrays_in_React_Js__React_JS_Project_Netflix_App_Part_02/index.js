import React from "react";
import ReactDOM from "react-dom";
import Card from "./React-components/Card";
import Sdata from "./React-components/Sdata";
import "./index.css";

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
    <h1 className="heading_style">List of top 6 Netflix Series in 2020</h1>
    {/* in here Card is a costom element an now we can make the costom attribute
    of it */}
    <Card
      // className="test"
      // NOTE = we can't be able to use the JSX element attributes the same way for the costom element
      // because 'Card' is not the JSX element and all the attribute include in that JSX element will not apply for the costom element
      // But if we want to use it as the normal costom attribute then we can be able to use it
      // But if we think that by using 'className' and using that class name you want to use it in the css then it will not going to work
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />
    {/* Now here 'imgsrc','title','sname','link' is the costom element of the 'Card' element */}
    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
    />
    <Card
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].link}
    />
    <Card
      imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].link}
    />
    <Card
      imgsrc={Sdata[5].imgsrc}
      title={Sdata[5].title}
      sname={Sdata[5].sname}
      link={Sdata[5].link}
    />
  </>,
  document.getElementById("root")
);
