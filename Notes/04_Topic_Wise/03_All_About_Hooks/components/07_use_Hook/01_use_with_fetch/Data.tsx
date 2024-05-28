import { use, useEffect, useState } from "react";

const Data: React.FC<{ url: string }> = ({ url }): React.JSX.Element => {
  // fetching data we use to do something like this where we need 'data', 'isLoading' & 'isError' as per the required response
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setData(undefined);
    setIsError(false);

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(setData)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [url]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  );
};

export default Data;
