// "use client";

import React from "react";

// Because we are using a NextJs with app directory where we can use Server component and by default it will use as a server component and by default this will going to run on the server
// Where on the server it can't track of the state of an application
// So we can't use 'useState', 'useEffect' or other hooks inside the server Component because 'useEffect' is a life cycle hook
// Also any thing with the 'window', 'localStorage' object also won't work on the server
// To convert Server component into client component we have to ways:
// 1. firstly we have to convert server component to client component by using "use client" at the top
// 2. use this component inside the component which is already a client component
const FServerAndClientComponents = (): React.JSX.Element => {
  return <></>;
};

export default FServerAndClientComponents;
