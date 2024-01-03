// use './theme.ts' value as context and set the value on this component

import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Box = (): React.JSX.Element => {
  const theme = useContext(ThemeContext);
  return (
    <div
      // here typescript have automatically inference the type of 'theme'
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Theme Context
    </div>
  );
};

export default Box;
