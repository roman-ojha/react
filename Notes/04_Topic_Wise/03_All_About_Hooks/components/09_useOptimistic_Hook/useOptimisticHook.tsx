import TodoList from "./TodoList";
import TodoWithUseOptimistic from "./TodoWithUseOptimistic";

const UseOptimisticHook = (): React.JSX.Element => {
  const initialTodos = [
    {
      id: "1",
      title: "roman",
    },
    {
      id: "2",
      title: "ojha",
    },
  ];
  return (
    <>
      <TodoList initialTodos={initialTodos} />
      <TodoWithUseOptimistic initialTodos={initialTodos} />
    </>
  );
};

export default UseOptimisticHook;
