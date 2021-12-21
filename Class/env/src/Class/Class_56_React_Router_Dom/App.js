import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./React-components/About";
import Contact from "./React-components/Contact";
import Error from "./React-components/Error";

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
      {/* we use 'Switch' to show only one component which met the requirement */}
      <Switch>
        <Route exact path="/" component={About} />
        {/* here '/' refer as a home page */}
        {/* here 'component' means which component we want to render as a '/' root path or home page */}
        {/* we use 'exact' to say to show only that component of the exact path */}
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/name" component={Name} />
        <Route component={Error} />
        {/* and in this case if use will go to the path which doesn't exist that this route will happen */}
      </Switch>
      {/* <About />
      <Contact /> */}
    </>
  );
};

export default App;
