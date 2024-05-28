import { useDeferredValue, useEffect, useMemo } from "react";

const List: React.FC<{ input: string }> = ({ input }): React.JSX.Element => {
  const LIST_SIZE = 20000;
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) l.push(<div key={i}>{input}</div>);
    return l;
  }, [input]);

  // to render this list when use type into the screen going to take a lot of time, we can fix this so that input will feel responsive even if the website feel slow using 'useDeferredValue'
  // the way 'useDeferredValue' work is like debounce and throttling means whenever use stop typing let's say for 100ms only after that it will going to perform any operation
  // but in 'useDeferredValue' you don't specify the time but what react does is react only perform this operation whenever application is not busy with anything else and then it will going to process all of the different changes

  // so we want to deferred this 'input' value because the input value have a lot of change going on and we don't want to render out a brand new list ever single time use input any character into the input field rather using 'useDeferredValue' it will going to wait until it's going to be while since the change is happen and to render out the list
  const deferredInput = useDeferredValue(input); // so now after the decent amount time between when the input changes last time and update the new 'deferredInput' value other wise keep it the same as was before

  const list2 = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++)
      l.push(<div key={i}>{deferredInput}</div>);
    return l;
  }, [deferredInput]); // because 'deferredInput' value doesn't change a lot 'useMemo' doesn't have to run a lot

  useEffect(() => {
    console.log(deferredInput);
  }, [deferredInput]);

  return <>{list2}</>;
};

export default List;
