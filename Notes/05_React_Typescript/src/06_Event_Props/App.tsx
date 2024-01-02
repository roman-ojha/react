import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div>
      <Button
        handleClick1={() => {
          console.log("Button clicked");
        }}
        handleClick2={(event) => {
          console.log("Button clicked", event);
        }}
        handleClick3={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handelChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
