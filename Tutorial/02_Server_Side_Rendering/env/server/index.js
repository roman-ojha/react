require("ignore-styles");
// here we require 'ignore-styles'

// and require '@babel/register'
require("@babel/register")({
  // here we need to ignore 'node_module'
  ignore: [/(node_module)/],
  // and we need to spacify the preset that we will going to use
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./server");

// now we can open our 'package.json' file and add a new scripts
/*
"scripts": {
    "ssr": "node server/index.js"
  }
*/
