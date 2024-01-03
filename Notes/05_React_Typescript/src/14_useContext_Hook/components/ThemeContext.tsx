import { createContext } from "react";
import { theme } from "./theme";

// Create theme context
const ThemeContext = createContext(theme);

// now create the context provider
type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
