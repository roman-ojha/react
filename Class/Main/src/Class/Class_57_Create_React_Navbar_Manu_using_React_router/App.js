import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./React-components/About";
import Contact from "./React-components/Contact";
import Error from "./React-components/Error";
import Navbar from "./React-components/Navbar";
import Home from "./React-components/Home";

const App = () => {
  const Name = () => {
    return (
      <>
        <h1>This is Name page</h1>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/name" component={Name} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
