"use client";

import React, { useState } from "react";

const CUpdatingObjectState = (): React.JSX.Element => {
  const [user, setUser] = useState({ name: "", city: "", age: 50 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setUser({
    //   ...user,
    //   name: e.target.value,
    // });

    // Or Another way to update the object
    setUser((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  return (
    <form>
      <input type="text" placeholder="Your Name" onChange={handleChange} />
    </form>
  );
};

export default CUpdatingObjectState;
