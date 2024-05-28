"use client";
// https://react.dev/reference/react-dom/hooks/useFormStatus#noun-labs-1201738-(2)
import { useRef, useState, FormEvent } from "react";
import { useFormStatus } from "react-dom";
import { submitForm } from "./action/submitForm";

type Todo = {
  id: string;
  title: string;
};

const TodoListWithUseFormStatus: React.FC<{ initialTodos: Todo[] }> = ({
  initialTodos,
}): React.JSX.Element => {
  const [todos, setTodos] = useState(initialTodos);

  async function onSubmit(data: FormData) {
    const title = data.get("title");
    if (typeof title !== "string") return;
    const newTodo = await createTodo(title);
    setTodos((prev) => [...prev, newTodo]);
  }

  async function submitForm2(data: FormData) {
    const newTodo = await submitForm(data); // calling server action and then setting response todo into 'todo' state
    if (newTodo) setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <>
      {/* So in form now rather then using onSubmit event we have to use 'action' */}
      {/* <form action={onSubmit}> */}
      {/* <form action={submitForm} method="POST"> */}{" "}
      {/* calling server action directly from the action */}
      <form action={submitForm2} method="POST">
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

// we hook this 'useFormStatus' into the action of form but we need it to be inside of a custom component inside of our form elements. so your <form> is like a context and this 'useFormStatus' hook is just consuming that context, so 'useFormStatus' must be inside of your <form> inside for you custom component
// So, we will going to create the custom component for our Submit button
function SubmitButton() {
  const status = useFormStatus();
  const isLoading = status.pending;
  console.log("Data: ", status.data);
  console.log("Pending : ", status.pending);
  console.log("Action: ", status.action);
  console.log("Method: ", status.method);

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

export default TodoListWithUseFormStatus;
