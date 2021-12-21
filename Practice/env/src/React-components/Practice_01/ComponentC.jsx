import React, { useContext } from "react";
import {
  Data1,
  Data2,
  Data3,
  Data4,
  Data5,
} from "../../Practice/Practice01ContextAPI";

const ComponentC = () => {
  const data1 = useContext(Data1);
  const data2 = useContext(Data2);
  const data3 = useContext(Data3);
  const data4 = useContext(Data4);
  const data5 = useContext(Data5);
  return (
    <>
      <Data1.Consumer>
        {(data1) => {
          return (
            <Data2.Consumer>
              {(data2) => {
                return (
                  <Data3.Consumer>
                    {(data3) => {
                      return (
                        <Data4.Consumer>
                          {(data4) => {
                            return (
                              <Data5.Consumer>
                                {(data5) => {
                                  return (
                                    <h1>
                                      {data1}
                                      <br />
                                      {data2}
                                      <br />
                                      {data3}
                                      <br />
                                      {data4}
                                      <br />
                                      {data5}
                                      <br />
                                    </h1>
                                  );
                                }}
                              </Data5.Consumer>
                            );
                          }}
                        </Data4.Consumer>
                      );
                    }}
                  </Data3.Consumer>
                );
              }}
            </Data2.Consumer>
          );
        }}
      </Data1.Consumer>
      <h1>
        {data1}
        <br />
        {data2}
        <br />
        {data3}
        <br />
        {data4}
        <br />
        {data5}
        <br />
      </h1>
    </>
  );
};

export default ComponentC;
