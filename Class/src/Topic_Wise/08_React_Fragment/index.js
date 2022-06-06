var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  // <div>
  //   <h1>hello world</h1> <h2>Hello world</h2> <h3>Hello world</h3>
  // </div>
  // in this JSX we are using div without any reason and we don't need that div but also because of that div it will create a problem in future code so to remove that div we use React Fragment
  <React.Fragment>
    <h1>hello world</h1>
    <h2>Roman</h2>
  </React.Fragment>,
  // now this will not use as an extra html element because of that the code will be clean
  // so now which way we have to use in : Div, Array, React Fragment..,
  // it will be easy to use React Fragment so, we can use React Fragment
  // A special Fragment Syntax.
  // React 16.2 also introduced a syntactical sugar for Fragments.
  /*
    <>
      <h1>hello world</h1>
      <h2>Roman</h2>
    </>,
    // now we don't even have to Write React.Fragment
  */
  document.getElementById("root")
);
