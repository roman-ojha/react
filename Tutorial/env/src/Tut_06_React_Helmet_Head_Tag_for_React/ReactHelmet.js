/*
    -> npm i react-helmet
*/

import React from "react";
import { Helmet } from "react-helmet";

const ReactHelmet = () => {
  return (
    <>
      <Helmet>
        {/* now we can use head tag that we used to use in html inside the jsx using 'Helmet' component or package */}
        <title>ReactHelmet</title>
        <meta name="keywords" content="Head,Helmet,React-Head-Tag" />
        <meta
          name="description"
          content="This is the tutorial for to use head tag inside react project"
        />
        <meta name="author" content="Roman Ojha" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <h1>This is body</h1>
    </>
  );
};

export default ReactHelmet;
