"use client";
// https://react.dev/reference/react/useTransition
//   Transitions let you keep the user interface updates responsive even on slow devices.
// With a Transition, your UI stays responsive in the middle of a re-render. For example, if the user clicks a tab but then change their mind and click another tab, they can do that without waiting for the first re-render to finish.
// Call useTransition at the top level of your component to mark some state updates as Transitions.
// useTransition returns an array with exactly two items:
// The isPending flag that tells you whether there is a pending Transition.
// The startTransition function that lets you mark a state update as a Transition.
import { ChangeEvent, useState, useTransition } from "react";

const UseTransitionHook = (): React.JSX.Element => {
  const [isPending, startTransition] = useTransition();

  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);

  const LIST_SIZE = 20000;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // here we have changing state going
    setInput(e.target.value);
    const l = [];
    // and we are pushing the new value int array upto length of 'LIST_SIZE' which is a computational heavy to complete
    for (let i = 0; i < LIST_SIZE; i++) l.push(e.target.value);
    // after that we are setting the list value as a new 'list' state
    setList(l);

    // Or it could be some operation like clicking a button and running a complex task on the background
    // by default without 'useTransition' hook this application or changing state feels buggy

    // Let's first understand how react work on this example where we have 'setInput' and 'setList' where react will try to combine all the different state changes and make into one call and it will going to make them all at once before rerendering our application
    // In this example react will try to combine 'setInput' and 'setList' and because 'setList' takes long time because it has to go through 'LIST_SIZE' of for loop and render out all of those element into the screen, rendering out from our 'setInput' and 'setList' is very slow
    // But we have'setInput' as a higher priority and 'setList' as a lower priority in that case we can use 'useTransition'
    // 'useTransition' allow us to make two state changes at the same time and rank them in order as how we want it to be, because 'setInput' should be in higher priority because the state of that needs to be changes as fast as possible so that use can easily be able to type in the input field
  }

  // 'useTransition' return two element:
  // 'isPending' -> boolean: it return true or false means where the data is currently being rendered or not
  // 'startTransition'

  // but React provide as an standalone 'startTransition' which we can use without the need of component or hook but using 'useTransition' hook we will get access to 'isPending' state as well: https://react.dev/reference/react/startTransition

  // so if you are telling a react to 'startTransition' then you are saying all of the stuff inside the transition is going to be low priority
  // so by default without transition react will first finish 'setInput' and then 'setList' only after finishing all the state change it will rerender the component to the screen where all the state are being categorized as high priority
  // but using 'startTransition' we can now put the peace of statement that are low priority to get updated

  function handleChange2(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    // so in this case now react will now work on both the state 'setInput' and 'setList' but as soon the 'setInput' is done it will going to render it to the screen and later when the lower priority changes is done ex: 'setList' then the list will get render into the screen
    startTransition(() => {
      // So, now here we are setting this block of statement as low priority
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) l.push(e.target.value);
      setList(l);
    });
  }

  // NOTE: that only use 'useTransition' when you need it because by using 'useTransition' you are making you app do more renders then normal

  return (
    <>
      <input type="text" value={input} onChange={handleChange2} />
      {isPending ? (
        <h1>Pending...</h1>
      ) : (
        list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      )}
    </>
  );
};

export default UseTransitionHook;
