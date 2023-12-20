"use client";

import { useEffect, useState } from "react";

export function B_Conditional_Rendering_Problem({ id }: { id: number }) {
  if (!id) {
    // If id is not provided then we will going to return like this
    return "No id provided";
  }

  // If provided then we will write a logic
  // But NOTE that you cannot use react hooks after you have return the component from this function you must have to write these hooks before returning the component
  //   const [something, setSomething] = useState(id);
  //   useEffect(() => {}, [something]);

  return <section>{/* Product card... */}</section>;
}

// Improved version of above component function
export default function B_Conditional_Rendering({ id }: { id: number }) {
  // Put
  const [something, setSomething] = useState(id);
  useEffect(() => {}, [something]);

  return (
    <section>
      {/* Making better conditional rendering */}
      {!id ? "No id provided" : <div>Product card {id}</div>}
    </section>
  );
}
