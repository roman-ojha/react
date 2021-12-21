import React, { useState, useContext, useEffect } from "react";
import { increment, decrement } from "../../Practice/Practice03Hooks";

const Incnum = () => {
  const [intState, setState] = useState(0);
  const incdec = (e) => {
    setState(intState + Number(e.target.value));
  };
  const incrnum = useContext(increment);
  const decrnum = useContext(decrement);
  const disBlockW10TopMar = {
    display: "block",
    marginTop: "10px",
  };
  useEffect(() => {
    setState(5);
  }, []);
  return (
    <>
      <increment.Consumer>
        {(incnum) => {
          return (
            <decrement.Consumer>
              {(decnum) => {
                return (
                  <>
                    <button value={-decnum} onClick={incdec}>
                      Decrement
                    </button>
                    <h1>{intState}</h1>
                    <button value={incnum} onClick={incdec}>
                      Increment
                    </button>
                  </>
                );
              }}
            </decrement.Consumer>
          );
        }}
      </increment.Consumer>
      <button style={disBlockW10TopMar} value={-decrnum} onClick={incdec}>
        Decrement
      </button>
      <h1>{intState}</h1>
      <button value={incrnum} onClick={incdec}>
        Increment
      </button>
    </>
  );
};

export default Incnum;
