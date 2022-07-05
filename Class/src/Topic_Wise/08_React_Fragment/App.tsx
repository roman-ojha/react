import React from "react";

const App = () => {
  const items: { id: number }[] = [{ id: 1 }, { id: 2 }];
  return (
    <React.Fragment>
      {/* now this 'React.Fragment' tag will not get render as html element */}
      <h1>Hello</h1>
      <h2>World</h2>
      {items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {/* and also react fragment accept 'key' attribute when rendering list of item */}
          </React.Fragment>
        );
      })}

      {<Child />}
    </React.Fragment>
  );
};

const Child = () => {
  // this is the short hand syntax for react fragment but in this case we can't pass 'key' attribute
  return <></>;
};

export default App;
