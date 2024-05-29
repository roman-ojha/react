const Sidebar = (): React.JSX.Element => {
  return (
    <nav
      className="flex flex-col justify-center items-center"
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <a href="/link-1">Link 1</a>
      <a href="/link-2">Link 2</a>
      <a href="/link-3">Link 3</a>
      <a href="/link-4">Link 4</a>
    </nav>
  );
};

export default Sidebar;
