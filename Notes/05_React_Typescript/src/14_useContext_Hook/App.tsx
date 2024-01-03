import Box from "./components/Box";
import { ThemeContextProvider } from "./components/ThemeContext";

function App() {
  return (
    <div>
      {/* wrap Box component with context provider */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
