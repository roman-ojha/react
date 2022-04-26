import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./React-components/About";
import Contact from "./React-components/Contact";
import Error from "./React-components/Error";
import Navbar from "./React-components/Navbar";
import Home from "./React-components/Home";
import Service from "./React-components/Service";
import User from "./React-components/User";

/*
# Hooks
      -> https://reactrouter.com/web/api/Hooks
      -> React Router ships with a few hooks that let you access the state of the router and perform navigation from inside your components.
        a) useHistory
        b) useLocation
        c) useParams
        d) useRouteMatch

        => useParams
              -> useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
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
        <Route path="/user/:fname/:lname" component={User} />
        {/* By using /:name you are passing the 'name' dynamically and fatch that into the website what ever the path user will type after /user/ s */}
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
