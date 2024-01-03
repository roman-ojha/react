type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// this component can handle object type and there is object type of constraint because T extends 'object' type we can pass any object type now
export const List = <T extends object | string>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item as React.ReactNode}
          </div>
        );
      })}
    </div>
  );
};
