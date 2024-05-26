"use client";
// Let's say that you don't want to show a fallback state rather you have a tabs and you want to show the old data until the new data is being loaded, to do that you need to use 'useTransition' hook, it will allow you allow you to do non argent update which won't change the UI until it finish updating
import { lazy, Suspense, useState, useTransition } from "react";

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
const Admin = lazy(() => wait(2000).then(() => import("./Admin")));

const AdvancedCodeSplittingConcepts = (): React.JSX.Element => {
  const [isAdmin, setIsAdmin] = useState(false);

  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h1>Conditional Lazy Loading</h1>
      <button
        onClick={() => {
          startTransition(() => {
            // now UI will not going to do a fallback on Suspense until the transition is finished
            // So, it means that it will wait for 'Admin' data to get downloaded before showing any data
            setIsAdmin((prev) => !prev);
          });
        }}
      >
        Toggle Admin
      </button>

      {/* But we can use 'isPending' state to show any kind of the data */}
      {isPending ? <h1>Admin is pending...</h1> : ""}
      <Suspense fallback={<h1>Loading Admin...</h1>}>
        {isAdmin ? <Admin /> : <h2>Not Admin</h2>}
      </Suspense>
    </>
  );
};

export default AdvancedCodeSplittingConcepts;
