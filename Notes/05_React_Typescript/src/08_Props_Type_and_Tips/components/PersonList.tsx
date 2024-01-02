import { Name } from "./Person.types";

type PersonListProps = {
  // user create Name type
  nameList: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.nameList.map((name) => (
        <h1 key={name.first}>
          {name.first} {name.last}
        </h1>
      ))}
    </>
  );
};

export default PersonList;
