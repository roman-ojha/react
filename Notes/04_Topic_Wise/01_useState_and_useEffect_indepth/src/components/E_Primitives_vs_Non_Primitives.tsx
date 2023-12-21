"use client";

import React, { useEffect, useState } from "react";

const EPrimitivesVsNonPrimitives = (): React.JSX.Element => {
  console.log("Component rendering...");
  const [value, setValue] = useState(0);

  const [obj, setObject] = useState({
    number: 100,
    totalPrice: true,
  });

  const handleClick = () => {
    // If we are setting the same value as before
    // Like if previous value of 'value' is 0 and we are again setting a value to 0 then component will not get rendered again
    setValue(0);
    // This will get apply to simple 'number', 'string', 'boolean'

    // But, What about object, in case of object it will rerender whether current value is same as previous value or not
    setObject({
      number: 100,
      totalPrice: true,
    });
    // Because, in javascript there are primitive values like 'number', 'string', 'boolean' which are passed by values
    // But in case of object it is passed by reference, because we are not working with the value in this case rather we are comparing the address of and object which is not same

    // Ex:
    const a = 5;
    const b = 5;
    // a===b (true)
    const o1 = {
      name: "Roman",
    };
    const o2 = {
      name: "Roman",
    };
    // o1 === o2 (false)
  };

  // So, if we will going to use 'useEffect' and use dependency array for 'obj' value which will going to be updated whether the value of object change or not and the useEffect function will get called, that would be a problem
  useEffect(() => {
    console.log("Object changes");
  }, [obj]);

  // but we know that in this case the value of object didn't changes so rather then providing the 'obj' as the dependency we will going to provide the property value of 'obj' as dependency which in this case are primitive values

  useEffect(() => {
    console.log("Object value changes");
  }, [obj.number, obj.totalPrice]);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default EPrimitivesVsNonPrimitives;
