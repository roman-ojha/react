import React from "react";
import ReactDOM from "react-dom";
// firstly we will import ReactDOM

const PortalDemo = (): JSX.Element => {
  // instead of simply returning JSX element we will going to return reactDom
  return ReactDOM.createPortal(
    <React.Fragment>
      <h1>Portal Demo</h1>,
    </React.Fragment>,
    document.getElementById("portal-root") as HTMLElement
  );
  //   ReactDOM.createPortal(<JSX_to_render>,<DOM_Node_to_mount_the_element_onto>)
};

export default PortalDemo;
