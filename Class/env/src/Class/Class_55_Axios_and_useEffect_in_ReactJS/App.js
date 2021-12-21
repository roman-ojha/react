//React_API_Call_to_Get_Pokemon_JSON_Data_using_Axios_and_useEffect_in_ReactJS
// to use Pokemon API we have to install 'axios' module
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [num, updateNum] = useState(1);
  const [name, updateName] = useState();
  const [move, updatemove] = useState();

  useEffect(() => {
    // we are trying to get API asychronouslly
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      updateName(res.data.name);
      updatemove(res.data.moves.length);
    }
    getData();
  });
  return (
    <>
      <h1>
        you chose <span style={{ color: "red" }}>{num} value</span>
      </h1>
      <h1>
        My name is<span style={{ color: "red" }}> {name}</span>
      </h1>
      <h1>
        I have<span style={{ color: "red" }}> {move} moves</span>
      </h1>
      <select
        value={num}
        onChange={(event) => {
          updateNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default App;
