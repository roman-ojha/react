import React from "react";
import Clock from "react-digital-clock";
import { FaBeer } from "react-icons/fa";

/*
  # what is NPM ?
    1. npm is the world's largest software Registry
    2. The Registry contains over 800,000 code packages.
    3. Open-source developers use npm to share software.
    4. it's full form is Node Package Manager
  # Installing npm
    1. npm is installed with Node.js
    2. This means that you have to install Node.js to get npm installed on your computer.
    3. Download Node.js from the official Nod:
       https://nodejs.org
  # Software Package Manager
    1. All npm package are defined in files called package.json
        -> to install
        -> npm init
    2. the content of package.json must be written in json
    3. At least two field must be present in the definition file: name and version.
  # Command line client
    1. npm includes a CLI(Command line client) that can be use to download and install software.
    2. npm can manage dependencies.
  # To install package
    -> ex:
    -> search 'npm react digital clock' in browser and use:
      -> npm install react-digital-clock
    -> now see in package.json
      ->"react-digital-clock": "^0.1.2",
      -> if this exist then you had sucessfully install 'react-digital-clock'
    -> now you have to import component like:
      ->import Clock from 'react-digital-clock';

*/

const App = () => {
  return (
    <>
      <Clock />
    </>
  );
};

export default App;
