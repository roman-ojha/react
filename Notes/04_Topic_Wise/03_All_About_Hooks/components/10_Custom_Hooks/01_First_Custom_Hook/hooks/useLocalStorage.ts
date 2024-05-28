import { useEffect, useState } from "react";

function getSavedValue<T>(key: string, initialValue: T) {
  const strValue = localStorage.getItem(key);
  console.log(initialValue);
  if (strValue) return JSON.parse(strValue);

  // useState even takes a function so we will going to check whether 'initialValue' is function or not
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage<T>(key: string, initialValue: T) {
  // using this hook we want to persist the data even if use refresh the page
  const state = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    // we will save the new value inside local storage
    localStorage.setItem(key, JSON.stringify(state[0]));
    // localStorage.setItem(key, JSON.stringify(initialValue));
  }, [state[0]]);

  return state;
}
