import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// first use case ----------------------
const fullName1 = ["Roman", "Ojha"];
const bioDate1 = [12, ...fullName1, "male"];
// here by using '...' three dot we can be able to get the exact value of 'fullName' in 'bioData'
// so that we don't have to use that same value in other variable
console.log(fullName1);
console.log(bioDate1);

// second use case ---------------------
var shooterGames1 = ["Dall of Duty", "Far Cry", "Resident Evil"];
var racingGames = ["Need for Speed", "Gran Turismo", "Burnout"];
var game = [...shooterGames1, ...racingGames];
console.log(game);

// third use case ---------------------
var shooterGames2 = ["Call of Duty", "Far Cry", "Resident Evil"];
var [first, ...remaining] = shooterGames2;
// we are using array ditructuring
console.log(first);
// by 'first' we will get 'Call of Duty';
console.log(remaining);
// by 'remaining' we will get '["Far Cry", "Resident Evil"]

// Fourth use case --------------------
const fullName2 = {
  fname: "Roman",
  lane: "Ojah",
};
const bioData2 = {
  id: 32,
  ...fullName2,
  gender: "male",
};
console.log(bioData2);
