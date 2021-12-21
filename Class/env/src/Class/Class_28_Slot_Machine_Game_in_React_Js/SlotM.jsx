import React from "react";

function SlotM(props) {
  let x = props.X;
  let y = props.Y;
  let z = props.Z;

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>This is Matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>This is Not Maching</h1>
          <hr />
        </div>
      </>
    );
  }
}

export default SlotM;
