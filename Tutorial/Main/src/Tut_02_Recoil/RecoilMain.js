/*
    -> Recoil is a new state management library for react it's simple to use
    -> npm i recoil
    -> yarn add recoil

    -> in recoil there is two important thing and they are:
        1) Atom
            -> we can say that atom works as the action like redux
        2) Selector
            -> and we can say that selector works as the reducer like redux
*/

// firstly we will add this in our root component :
/*
    ->  <RecoilRoot>
        <RecoilMain />
      </RecoilRoot>

    -> this means that any component further down in the component tree inside of app will be able to access data inside of our recoil state
    -> 
  */

import React, { useEffect } from "react";
// now we will import the recoil 'atom' and 'useRecoilState'
import {
  atom,
  useRecoilState,
  RecoilRoot,
  selector,
  useRecoilValue,
} from "recoil";

const charAtom = atom({
  key: "charState",
  default: 0,
});

// let's just assument this is the another component where we are setting the value
function CharCount() {
  const [text, setText] = useRecoilState(charAtom);
  // here we are making a state just like a 'useState' and passing the atom that we have created at the top
  // so when we will use a 'setText' at that time it will set the value into the atop
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
          // here we are setting the value into the atom and we are accessing it throught 'text'
        }}
      ></input>
    </>
  );
}

function GetCharValue() {
  const [text, setText] = useRecoilState(charAtom);
  return (
    <>
      <div>
        <p>{text}</p>
        {/* here we are accessing the value of atom throught the 'text' */}
      </div>
    </>
  );
}

function GetCharLength() {
  return (
    <>
      <h3>{useRecoilValue(charValueSelector)}</h3>
      {/* now here we can get the recoil value after calculating that value and getting that value through selector*/}
    </>
  );
}

const charValueSelector = selector({
  key: "charValueSelector",
  get: ({ get }) => {
    // inside the get we will get the value
    const text = get(charAtom);
    // here we are getting the value of 'charAtom'
    return text.length;
  },
});

const RecoilMain = () => {
  return (
    <>
      <RecoilRoot>
        <h1>Char Counter</h1>
        <CharCount />
        <GetCharValue />
        <GetCharLength />
        {/* here these component which are inside of 'RecoilRoot' they can access the data form the 'recoil' */}
      </RecoilRoot>
    </>
  );
};

export default RecoilMain;
