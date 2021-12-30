/*
    -> https://react-spring.io/
*/

import React, { useState } from "react";
// import useMeasure from "./useMeasure";
import { useSpring, animated } from "react-spring";
import "./style.css";
const ReactSpring = () => {
  const [active, toggle] = useState(false);
  //   this will going to toggle active state based on user interaction on click
  const props = useSpring({
    //   here we can spacify the from
    // from: { width: "0%" },
    // to: { width: "100%" },
    width: active ? 500 : 0,
    backgroundColor: active ? "hotpink" : "turquoise",
    config: { duration: 3000 },
    // we can pass the config to the animation
  });
  return (
    <>
      <div class="main" onClick={() => toggle(!active)}>
        <animated.div
          class="Fill"
          //   style={{ width: props.width }}
          style={props}
        ></animated.div>
        {/* and div doesn't know we are animating thing and react is not aware of it so we have to import 'animated' object from 'react-spring'*/}
        {/* <div class="content">{active ? width : 0} </div> */}
        <animated.div class="content">
          {props.width.to((x) => Math.floor(x / 5))}
        </animated.div>
        {/* here we are saying if it is active then we want the value 100 else we want the value 0 */}
        {/* this to() function will  get the animation value*/}
      </div>
    </>
  );
};

export default ReactSpring;
