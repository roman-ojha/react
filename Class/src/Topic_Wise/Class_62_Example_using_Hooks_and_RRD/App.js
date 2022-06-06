import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./React-components/About";
import Contact from "./React-components/Contact";
import Error from "./React-components/Error";
import Navbar from "./React-components/Navbar";
import Home from "./React-components/Home";
import Service from "./React-components/Service";
import User from "./React-components/User";
import Search from "./React-components/Search";

/*
# Hooks
      -> https://reactrouter.com/web/api/Hooks
      -> React Router ships with a few hooks that let you access the state of the router and perform navigation from inside your components.
        a) useHistory
        b) useLocation
        c) useParams
        d) useRouteMatch

        => useHistory:
        -> The useHistory hook gives you access to the history instance that you may use to navigate.
        
        # history is mutable
            -> The history object is mutable. Therefore it is recommended to access the location from the render props of <Route>, not from history.location. This ensures your assumptions about React are correct in lifecycle hooks. For example:

        => useLocation:
          ->  The useLocation hook returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.

*/

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
        <Route
          exact
          path="/about"
          component={() => {
            return <About name="About" />;
          }}
        />
        <Route exact path="/search" component={Search} />
        <Route exact path="/user/:fname" component={User} />
        <Route exact path="/user/:fname/:lname" component={User} />
        <Route
          exact
          path="/service"
          render={() => {
            return <Service name="Service" />;
          }}
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/name" component={Name} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
