import React, { useEffect, useState } from "react";

/*
What does useEffect do? 
  https://reactjs.org/docs/hooks-effect.html
    -> By using this Hook, you tell React that your component needs to do something after render. React will  remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the   DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some  other imperative API.
*/

const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(() => {
    // so when the render method will call or when the page will render then this method will automatically will going to call called
    alert("Increment");
    console.log("I am clicked again");
    // but there is a problem and that is:
    // when there is a lot of button or render method going on inside the page in that case when you will going to call any one of them 'useEffect' will call again because it is the default behaviour of the useEffect it means will will just call the 'useEffect' function if some render thing is going on
    // but we don't need that kind of property we just need 'useEffect()' to call when one of the render will call only at that time 'useEffect' function have to call
    // in this situation when in am pressing only one button at that time 'useEffect' have to called
    // now if we will use [] array the 'useEffect' will call only one time
    // but we need to call when one button will going to clicked
    // now here we can see if we will pass the value inside []-> [num] that which has to change and only at that time 'useEffect()' will called
  }, [num]);

  return (
    <>
      <button
        onClick={
          () => {
            setNum(num + 1);
          }
          // ,() => {
          //   // here if we will use another callback function and while clicking without incrementing it will show us alert it means react is given first priority to this function so in this kind of situation we can use 'useEffect()'
          //   alert("Increment");
          // }
        }
        style={{ width: "200px", height: "100px", "font-size": "20px" }}
      >
        clickme {num}
      </button>
      <br />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
        style={{ width: "200px", height: "100px", "font-size": "20px" }}
      >
        clickme {nums}
      </button>
    </>
  );
};

export default App;
