"use client";
// import Admin from "./Admin";

// let's say that you have a admin component that should only access by authenticated admin so, in that case we will just going to conditionally import the admin component
import { lazy, Suspense, useState } from "react";

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
const Admin = lazy(() => wait(2000).then(() => import("./Admin")));

const ConditionalCodeSplitting = (): React.JSX.Element => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <h1>Conditional Lazy Loading</h1>
      <button onClick={() => setIsAdmin((prev) => !prev)}>Toggle Admin</button>
      <Suspense fallback={<h1>Loading Admin...</h1>}>
        {isAdmin ? <Admin /> : <h2>Not Admin</h2>}
      </Suspense>
    </>
  );
};

export default ConditionalCodeSplitting;
