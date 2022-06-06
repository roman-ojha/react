import React from "react";
import SlotM from "./React-components/SlotM";
import Emoji from "./React-components/Emoji";

const AllEmoji = (value) => {
  return <SlotM X={value.X} Y={value.Y} Z={value.Z} />;
};

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        {" "}
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold" }}> Slot machine game </span> 🎰{" "}
      </h1>
      <div className="slot_machine">{Emoji.map(AllEmoji)}</div>
    </>
  );
};

export default App;
