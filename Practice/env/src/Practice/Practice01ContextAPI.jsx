import React, { createContext } from "react";
import ComponentA from "../React-components/Practice_01/ComponentA";

const Data1 = createContext();
const Data2 = createContext();
const Data3 = createContext();
const Data4 = createContext();
const Data5 = createContext();

const Practice01 = () => {
  return (
    <>
      <Data1.Provider value="This is the value from the data 1" data="hello">
        <Data2.Provider value="This is the value from the data 2">
          <Data3.Provider value="This is the value from the data 3">
            <Data4.Provider value="This is the value from the data 4">
              <Data5.Provider value="This is the value from the data 5">
                <ComponentA />
              </Data5.Provider>
            </Data4.Provider>
          </Data3.Provider>
        </Data2.Provider>
      </Data1.Provider>
    </>
  );
};

export default Practice01;
export { Data1, Data2, Data3, Data4, Data5 };
