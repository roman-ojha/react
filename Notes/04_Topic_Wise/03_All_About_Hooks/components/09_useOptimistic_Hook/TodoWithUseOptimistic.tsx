"use client";
import { useState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";

type Todo = {
  id: string;
  title: string;
};

type OptimisticTodo = Todo & {
  pending?: boolean;
};

const TodoWithUseOptimistic: React.FC<{ initialTodos: Todo[] }> = ({
  initialTodos,
}): React.JSX.Element => {
  const [todos, setTodos] = useState(initialTodos);

  const [optimisticTodos, setOptimisticTodos] =
    useOptimistic<OptimisticTodo[]>(todos); // it works same as useState
  // so this 'optimisticTodos' provides us the optimistic value means, currently we have request to server to create new todo but we are optimistic about it that it will get created and we want an immediate update to todo which this 'optimisticTodos' provides us with

  // we can even pass a reducer function inside the 'useOptimistic'
  function reducer(
    state: OptimisticTodo[],
    action: { type: "ADD"; payload: string }
  ): OptimisticTodo[] {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          { id: crypto.randomUUID(), title: action.payload, pending: true },
        ];
      default:
        throw new Error("Not valid");
    }
  }
  const [optimisticTodos2, dispatchOptimisticTodos] = useOptimistic(
    todos,
    reducer
  );

  async function onSubmit(data: FormData) {
    const title = data.get("title");
    if (typeof title !== "string") return;

    const optimisticNewTodo = {
      id: crypto.randomUUID(),
      title: title,
      pending: true, // here now we can even pass a new state for now we are added pending state to be able to use it while it is being optimistic update
    };
    // so first we will update the optimistic todo assuming that we will going to get this data from response
    setOptimisticTodos((prev) => [...prev, optimisticNewTodo]);

    // different way of dispatching optimistic through reducer
    dispatchOptimisticTodos({ type: "ADD", payload: title });

    const newTodo = await createTodo(title); // now this will response us with created todo
    // now finally we will update the actual 'todos' by adding newly create todo and that 'todos' state is using by 'useOptimistic' at the top it means that in this 'setTodos' what ever we will set a new todo with the optimistic todo will also get update and replaced by the newly set value bellow
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
      <ol>
        {optimisticTodos.map((todo) => (
          <li key={todo.id} style={{ opacity: todo.pending ? 0.5 : undefined }}>
            {todo.title}
          </li>
        ))}
      </ol>
      <ol>
        {optimisticTodos2.map((todo) => (
          <li key={todo.id} style={{ opacity: todo.pending ? 0.5 : undefined }}>
            {todo.title}
          </li>
        ))}
      </ol>
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
  return wait(
    {
      id: crypto.randomUUID(),
      title: `${title} -- from the server`,
      pending: false,
    },
    1000
  );
}

function wait<T>(value: T, duration: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), duration);
  });
}

export default TodoWithUseOptimistic;
