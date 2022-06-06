import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState("mango");
  const inputEvent = (e) => {
    setImg(e.target.value);
  };

  return (
    <>
      <div className="search_bar">
        <input
          type="text"
          placeholder="search"
          onChange={inputEvent}
          value={img}
        ></input>
      </div>
      {img === "" ? null : <Sresult search={img} />}
    </>
  );
};

export default Search;
