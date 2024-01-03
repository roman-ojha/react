// this component can only hand the list of string value
type ListProps = {
  items: string[];
  onClick: (value: string) => void;
};

export const StringList = ({ items, onClick }: ListProps) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {index}
          </div>
        );
      })}
    </div>
  );
};
