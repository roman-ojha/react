import React from "react";
import Card from "./components/Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <h1 className="text text-center text-danger text-capitalize my-5">
        Welcome to My channel
      </h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card src="https://picsum.photos/201/150" />
          </div>
          <div className="col">
            <Card src="https://picsum.photos/202/150" />
          </div>
          <div className="col">
            <Card src="https://picsum.photos/199/150" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
