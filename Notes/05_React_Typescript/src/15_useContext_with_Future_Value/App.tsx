import User from "./components/User";
import { UserContextProvider } from "./components/UserContext";

function App() {
  return (
    <div>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
