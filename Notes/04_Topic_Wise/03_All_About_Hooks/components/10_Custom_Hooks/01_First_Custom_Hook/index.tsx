"use client";
import useLocalStorage from "./hooks/useLocalStorage";
import useUpdateLogger from "./hooks/useUpdateLogger";

const Index = (): React.JSX.Element => {
  const [name, setName] = useLocalStorage<string>("name", "");

  useUpdateLogger(name);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default Index;
