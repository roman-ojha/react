"use client";
// https://react.dev/reference/react/useLayoutEffect
// https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327244-optional-hooks/4121584-10-uselayouteffect
import { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffectHook = (): React.JSX.Element => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    // so, what useEffect does is whenever 'count' changes it will runt his function
    // and useEffect work asynchronously so, react will going to calculate out all of you DOM changes, it will going to render out a DOM to the screen and on some point these useEffect will going to run on the background but then will not going to block the DOM
    // so, useEffect runs after the DOM has been painted into the screen
  }, [count]);

  useLayoutEffect(() => {
    // But 'useLayoutEffect' is not asynchronous between one react react calculate DOM and when it point it out to the screen
    // So, react will calculate the position of everything in the DOM and then it pass that into the browser and in between that and when the browser point the information to the screen, all of the 'useLayoutEffect' are going to run
    // So, 'useLayoutEffect' are best when you need to do something based on the layout of you DOM. So, you need to measure DOM elements or you need to move things that will going to visible to the user, you need to use the 'useLayoutEffect'
    // But 'useLayoutEffect' is not that performative because it works synchronously that the reason you should always try to use 'useEffect' and if only this does't work then you can use 'useLayoutEffect'
    console.log(count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <p>{count}</p>
    </>
  );
};

export default UseLayoutEffectHook;
