import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

function App() {
  return (
    <div>
      <Status status="success" />
      {/* string children props */}
      <Heading>Placeholder text</Heading>
      {/* react component children as props */}
      <Oscar>
        <Heading>Oscar goes to leonardo dicaprio!</Heading>
      </Oscar>
      <Greet name="Roman" messageCount={10} isLoggedIn={false} />
    </div>
  );
}

export default App;
