type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// If you want to restrict type with specific object then we can extends that with defined types
// here every object inside 'T' needs to have 'id' of type number
export const ListWithId = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};
