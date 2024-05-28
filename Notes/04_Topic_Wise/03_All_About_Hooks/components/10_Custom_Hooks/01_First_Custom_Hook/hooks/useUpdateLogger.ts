// this hook will log the state that every time did change

import { useEffect } from "react";

export default function useUpdateLogger<T>(value: T) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
