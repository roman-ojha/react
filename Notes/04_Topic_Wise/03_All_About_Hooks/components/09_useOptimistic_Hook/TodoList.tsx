"use client";
import { useState } from "react";
import { useFormStatus } from "react-dom";

type Todo = {
  id: string;
  title: string;
};

const TodoList: React.FC<{ initialTodos: Todo[] }> = ({
  initialTodos,
}): React.JSX.Element => {
  const [todos, setTodos] = useState(initialTodos);

  async function onSubmit(data: FormData) {
    const title = data.get("title");
    if (typeof title !== "string") return;
    const newTodo = await createTodo(title);
    // here we can see that we are not doing any optimistic update, where only after we create the data into the server and then get response from it only after that we are updating the state, which could take a lot of time to get update in the client UI interface
    // But using Optimistic update the new changes will immediately get updated into the UI and if error occur then it will automatically handle the error
    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <>
      <form action={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" id="title" />
        <br />
        <SubmitButton />
      </form>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
};

function SubmitButton() {
  const status = useFormStatus();
  const isLoading = status.pending;
  return (
    <button type="submit" disabled={isLoading}>
      Create
    </button>
  );
}

function createTodo(title: string) {
  return wait({ id: crypto.randomUUID(), title }, 1000);
}

function wait<T>(value: T, duration: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), duration);
  });
}

export default TodoList;
