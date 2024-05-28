"use client";
// https://react.dev/reference/react/use
import { Suspense, useState } from "react";
import Data from "./Data";
import DataWithUse from "./DataWithUse";
import ErrorBoundary from "./ErrorBoundary";

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

const UseHook = (): React.JSX.Element => {
  const [url, setURL] = useState(URLS.USERS);

  return (
    <>
      <div>
        <input
          type="radio"
          name="radio"
          id="users"
          onClick={() => {
            setURL(URLS.USERS);
          }}
        />
        <label htmlFor="users">Users</label>
        <input
          type="radio"
          name="radio"
          id="posts"
          onClick={() => {
            setURL(URLS.POSTS);
          }}
        />
        <label htmlFor="posts">Posts</label>
        <input
          type="radio"
          name="radio"
          id="comments"
          onClick={() => {
            setURL(URLS.COMMENTS);
          }}
        />
        <label htmlFor="comments">Comments</label>
      </div>
      {/* <Data url={url} /> */}

      {/* Now we will just going to wrap the component with suspense so that if data will have not come yet then we will show the loading state */}
      {/* So, 'use' hook is what triggering the suspense to be loading at the first */}
      {/* And when we work with Suspense we have to use Error boundary */}
      <ErrorBoundary fallback={<div>Error...</div>}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <DataWithUse url={url} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default UseHook;
