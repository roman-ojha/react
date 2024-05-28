"use client";
import { Suspense, use } from "react";

const DataWithUse: React.FC<{ url: string; shouldFetch?: boolean }> = ({
  url,
  shouldFetch,
}): React.JSX.Element => {
  // But using 'use' hook we don't need these above logic
  let data = use(fetch(url).then((res) => res.json()));
  // const data = use(Promise.reject("jfkdsl")); // rejecting promise so to see some error
  // because this response promises it could be with data or error
  // 'use' hook is awaiting some data to get response

  // we know that we can't wrap any other react inside any function or conditional statement but we can use 'use' hook inside any function or conditional statement
  if (shouldFetch) {
    data = use(fetch(url).then((res) => res.json()));
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default DataWithUse;
