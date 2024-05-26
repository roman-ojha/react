"use client";
// A large application consist of components and third party libraries and if you didn't do anything to load different parts only when they are needed then the huge bundle or a chunk of javascript will be shift to you user as soon as they open you website which will effect the performance of you application.

// https://react.dev/reference/react/lazy#lazy
// Usually, you import components with the static import declaration:
import React, { Suspense, useState } from "react";
// To defer loading this component’s code until it’s rendered for the first time, replace this import with:

// NOTE: code-splitting example: https://youtu.be/JU6sl_yyZqs

import { lazy } from "react";

const MarkdownPreview = lazy(() => import("@/components/MarkdownPreview"));

export default function Home() {
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
          {/* But let's say that this component fails to get loaded in that case we can use error boundaries */}
        </Suspense>
      )}
    </>
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
