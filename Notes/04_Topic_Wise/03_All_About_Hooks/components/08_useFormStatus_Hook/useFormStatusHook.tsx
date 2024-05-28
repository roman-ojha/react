import TodoList from "./TodoList";
import TodoListWithUseFormStatus from "./TodoListWithUseFormStatus";

const UseFormStatusHook = (): React.JSX.Element => {
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
      {/* <TodoList initialTodos={initialTodos} /> */}
      <TodoListWithUseFormStatus initialTodos={initialTodos} />
    </>
  );
};

export default UseFormStatusHook;
