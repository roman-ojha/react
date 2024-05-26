// we can create the global lazyLoad rather then using lazy loading in every component import
import { lazy } from "react";

export function lazyLoad(path: string, namedExport: string | null) {
  return lazy(() => {
    const promise = import(path);
    if (namedExport == null) return promise;
    else return promise.then((module) => ({ default: module[namedExport] }));
  });
}
