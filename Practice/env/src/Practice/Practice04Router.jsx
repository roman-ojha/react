import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../React-components/Practice_04/Home";
import About from "../React-components/Practice_04/About";
import Contact from "../React-components/Practice_04/Contact";
import Navbar from "../React-components/Practice_04/Navbar";
import "../React-components/Practice_04/NavStyle.css";
import { createContext } from "react";

const AboutImage = createContext();

const Practice04Router = () => {
  const Main = () => {
    return (
      <>
        <h1>This is the main page</h1>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={Home} />
        <AboutImage.Provider value="https://img.flaticon.com/icons/png/512/149/149071.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF">
          <Route exact path="/about" component={About} />
        </AboutImage.Provider>
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
};

export default Practice04Router;
export { AboutImage };
