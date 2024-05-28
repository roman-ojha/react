"use client";
// https://react.dev/reference/react-dom/hooks/useFormStatus#noun-labs-1201738-(2)
import { useRef, useState, FormEvent } from "react";

type Todo = {
  id: string;
  title: string;
};

const TodoList: React.FC<{ initialTodos: Todo[] }> = ({
  initialTodos,
}): React.JSX.Element => {
  const [todos, setTodos] = useState(initialTodos);
  const inputRef = useRef<HTMLInputElement>(null);
  // to handling the loading state where use have click the create todo button and then we want user to notify that todo is being created in that case we use to create new loading state
  // this is great but it require you to create extra loading state to create and it is not ideal, but using 'useFormStatusHook' give us the automatic feature for us.
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (inputRef.current == null) return;
    const newTodo = await createTodo(inputRef.current.value);
    setTodos((prev) => [...prev, newTodo]);
    setLoading(false);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" id="title" ref={inputRef} />
        <br />
        <button type="submit" disabled={loading}>
          Create
        </button>
      </form>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
};

function createTodo(title: string) {
  return wait({ id: crypto.randomUUID(), title }, 1000);
}

function wait<T>(value: T, duration: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), duration);
  });
}

export default TodoList;
