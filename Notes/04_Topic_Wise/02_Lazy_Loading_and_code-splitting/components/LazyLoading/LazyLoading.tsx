"use client";
// A large application consist of components and third party libraries and if you didn't do anything to load different parts only when they are needed then the huge bundle or a chunk of javascript will be shift to you user as soon as they open you website which will effect the performance of you application.

// https://react.dev/reference/react/lazy#lazy
// Usually, you import components with the static import declaration:
import React, { Suspense, useState } from "react";
// To defer loading this component’s code until it’s rendered for the first time, replace this import with:

// NOTE: code-splitting example: https://youtu.be/JU6sl_yyZqs

import { lazy } from "react";

// const MarkdownPreview = lazy(() => import("@/components/MarkdownPreview"));

// Add a fixed delay so you can see the loading state
function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
// now simulate the lazy loading using above function
const MarkdownPreview = lazy(() =>
  wait(2000).then(() => import("@/components/LazyLoading/MarkdownPreview"))
);
// NOTE that this is the default export that is happening like from {default: MarkdownPreview}
// But for named export like those component that don't have default export we can work like this:
const About = lazy(() =>
  import("@/components/LazyLoading/About").then((module) => {
    // this this 'module' object have that about property
    return {
      // now we will just return About component as a default
      default: module.About,
    };
  })
);

export default function LazyLoading() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState("Hello, **world**!");
  return (
    <>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<h1>Loading...</h1>}>
          {/* This demo loads with an artificial delay. The next time you untick and tick the checkbox, Preview will be cached, so there will be no loading state. */}
          <h2>Preview</h2>
          {/* Let's just say that this component render time is lot higher then the other in that case we will lazy load this component so that the render will be fast on other part of this 'Home' component but this component will only lazy load */}
          <MarkdownPreview markdown={markdown} />
          {/* But let's say that this component fails to get loaded in that case we can use error boundaries, Continue: https://youtu.be/IBrmsyy9R94?t=468 */}
          <About />
        </Suspense>
      )}
    </>
  );
}

// Example where you can use lazy loading:
// 1. let's say that you have a bunch of pages that you don't want to load at the first load of the website in that case you can lazy load those heavy pages or components
