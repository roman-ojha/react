import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./React-components/About";
import Contact from "./React-components/Contact";
import Error from "./React-components/Error";
import Navbar from "./React-components/Navbar";
import Home from "./React-components/Home";
import Service from "./React-components/Service";

/*
  => we had already seen or use component in the router render methods
    <Route component={}>
  => you can go to these website get refrence
    -> https://migcoder.medium.com/difference-between-render-and-component-prop-on-react-router-v4-368ca7fedbec
    -> https://reactrouter.com/web/api/Route/component
    -> https://reactrouter.com/web/api/Route/component

  => Different between component and render
    -> in component when we are calling the component it will going to call the component again and again 
    -> but in render method when we will call the component it will going to see that does that component and try to upgrade it if nothing had been changed then it will just render the same component without call

  => When you use component (instead of render or children, below) the router uses React.createElement to create a new React element from the given component. That means if you provide an inline function to the component prop, you would create a new component evey render. This results in the existing component unmounting and the nw component moutin instead of just updating the existing component when using an inline function for inline rendering, use the render
      ->  if (component)
            return match ? React.createElement(component, props) : null

          if (render)
            return match ? render(props) : null

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
          // here in component we can pass callback function so that inside there we can return <About> page and throught we can easily be able to pass props
          component={() => {
            return <About name="About" />;
          }}
        />
        <Route
          exact
          path="/service"
          // render is recomendend when you want to pass props
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
