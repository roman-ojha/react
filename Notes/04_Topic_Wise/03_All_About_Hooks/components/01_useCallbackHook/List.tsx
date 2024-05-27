import { useEffect, useState } from "react";

const List: React.FC<{ getItem: (_: number) => number[] }> = ({
  getItem,
}): React.JSX.Element => {
  const [items, setItem] = useState<number[]>([]);

  useEffect(() => {
    setItem(getItem(5));
    console.log("Updating Items");
  }, [getItem]);

  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};

export default List;
