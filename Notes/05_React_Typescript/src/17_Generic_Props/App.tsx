import { List } from "./components/List";
import { ListWithId } from "./components/ListWithId";
import { StringList } from "./components/StringList";

function App() {
  return (
    <div>
      <StringList
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <ListWithId
        items={[
          {
            id: 1,
          },
          { id: 2 },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
