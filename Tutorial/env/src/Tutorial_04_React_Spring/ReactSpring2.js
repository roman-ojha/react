import React, { useState } from "react";
import useInterval from "react-useinterval";
import "./style.css";
// we would like to use a fade in out animation and scale in out animation whenever slideindex has changed, we can use the 'useTransition' from react spring to animated the mounting and unmounting of components or elements
import { useTransition, animated } from "react-spring";

const slides = [
  {
    id: 0,
    url: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 4,
    url: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
  },
  {
    id: 5,
    url: "https://www.w3schools.com/howto/img_snow.jpg",
  },
  {
    id: 6,
    url: "https://wallpapercave.com/wp/XfEK6zZ.jpg",
  },
];

const ReactSpring2 = () => {
  const [index, set] = useState(0);
  const item = slides[index];
  const increment = () => set((state) => (state + 1) % slides.length);
  useInterval(increment, 2000);
  //   here we are using "useInterval" package to use 'useInterval" feature in react
  const transitions = useTransition(
    //   it accept couple of argument
    // first one is <active slide>
    slides[index],
    // we also need to define the unique keys for each slide and so 'react-spring' will know how to animate keep track of those
    // (item) => item.id,
    {
      // props config
      from: {
        opacity: 0,
        transform: "scale(1.1)",
      },
      enter: {
        //   when slide will going to be acitve
        opacity: 1,
        transform: "scale(1)",
      },
      leave: {
        //   when slide will going to be unmounted
        opacity: 0,
        transform: "scale(0.9)",
      },
    }
  );

  // with the result from 'useTransition' we can iterate over the items so:
  //   NOTE: it is not working right now:
  return transitions.map(({ item, props, key }) => {
    return (
      <animated.div
        key={key}
        class="bg"
        style={{
          backgroundImage: `url(${item.url})`,
          ...props,
        }}
      />
    );
  });
};

export default ReactSpring2;
