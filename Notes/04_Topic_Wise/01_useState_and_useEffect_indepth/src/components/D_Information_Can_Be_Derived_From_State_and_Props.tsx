"use client";

import React, { useEffect, useState } from "react";

const PRICE_PER_ITEM = 5;

const DInformationCanBeDerivedFromStateAndProps = (): React.JSX.Element => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(quantity * PRICE_PER_ITEM);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setQuantity(quantity + 1);
    // after setting the new quantity we kind if think that we have to update the total price as well for that we might will use the 'useEffect' with 'quantity' as dependency array
  };
  useEffect(() => {
    // This will work as expected, But we don't have to do this
    setTotalPrice(quantity * PRICE_PER_ITEM);
  }, [quantity]);

  // Another way is to derived value from State & Props as bellow
  const anotherTotalPrice = quantity * PRICE_PER_ITEM;
  // This this will also work same as using useEffect, because this component function will automatically run whenever we will update the state and the value of 'anotherTotalPrice' will also get updated

  return (
    <div>
      <button onClick={handleClick}>Add 1 item</button>
      <h2>Total Price: {totalPrice}</h2>
      <h2>Another Total Price: {anotherTotalPrice}</h2>
    </div>
  );
};

export default DInformationCanBeDerivedFromStateAndProps;
