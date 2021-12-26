/*
    -> to create a environment we can create a file called .env in root folder
    -> if we are using create react app then it already have the webpack inside it so we can access .env file easily
    -> NOTE: all the environment variable need to start with 'REACT_APP'
    -> we get the prebuild environment variable inside react which is 'NODE_ENV'
        -> and which is going to be the environment that we are in right now
        -> since we are runnig the development server with 'npm run start' so 'NODE_ENV' will going to be the 'development'
        -> if we will build it then it will be in the production environment

    -> so now we can use .env according to the environment so now we will make a file called:
        -> .env.development
        -> .env.production
    -> so inorder to use this two different file we have to install the package called:
        -> npm i env-cmd

    -> so now we have to add this into our start script in package.json
        ->  "start:staging": "env-cmd -f .env.development react-scripts start",
            "start:prod": "env-cmd -f .env.production react-scripts start",
          
        -> now while running the project we have to run according the our prefrences
          -> if we are in development then we will use:
              -> npm run start:staging
              -> yarn start:staging
          -> if we are in production then we will use:
              -> npm run start:prod
              -> yarn start:prod

          -> now add it into a .gitignore
    -> NOTE: don't put any secret api keys in the frontend code if there is some secret api keys then put it onto the backend

    -> if you don't want to use to many file then you can put all of the env inside '.env-cmdrc.json' firstly create this file and put all the env
        -> now you don't need these '.env.production' , '.env.development' you can delete it
        -> now you have to edit the script from the package.json:
            -> "start:staginge": "env-cmd -e development react-scripts start",
              "start:prode": "env-cmd -e production react-scripts start",
            -> again put this file into the .gitignore
*/

import React from "react";
import "./style.css";

const ReactEnv = () => {
  return (
    <>
      <div className="App_Container">
        <header className="App_header">
          {process.env.REACT_APP_MY_API_KEY}
        </header>
      </div>
    </>
  );
};

export default ReactEnv;
