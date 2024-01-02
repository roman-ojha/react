import Greet from "./components/Greet";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList: (typeof personName)[] = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
  ];

  return (
    <div>
      <Greet name="Roman" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList nameList={nameList} />
    </div>
  );
}

export default App;
