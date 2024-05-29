import { Todo } from ".";

const Navbar: React.FC<{ todos: Todo[] }> = ({ todos }): React.JSX.Element => {
  return (
    <nav className="nav">
      <h3>Completed: {todos.filter((todo) => todo.completed).length}</h3>
      <a href="/">Todo</a>
      <a href="/account">Account</a>
    </nav>
  );
};

export default Navbar;
