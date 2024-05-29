"use client";
import { signal } from "@preact/signals-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

// creating signal
const name = signal("Roman");

// name.value contain actual value

// name.value = "Razz" // here if we will change the name then all of the code that uses this signal will get updated with this signal value

setInterval(() => {
  name.value = Math.random().toString();
  console.log(name.value);
}, 500);

const TodoList = (): React.JSX.Element => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const value = localStorage.getItem("TODOS");
    if (value == null) return [];
    return JSON.parse(value);
  });

  const addTodo = (name: string) => {
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: name, completed: false },
    ]);
  };

  const toggleTodo = (id: string, checked: boolean) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: checked } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  return (
    <section>
      <h1>Random Name: {name.value}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(input);
          setInput("");
        }}
        className="form"
      >
        <label htmlFor="todo">New Task</label>
        <br />
        <input
          type="text"
          name="todo"
          id="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button type="submit">Add</button>
      </form>

      {todos.map((todo) => (
        <li key={todo.id}>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => toggleTodo(todo.id, e.target.checked)}
            />
            {todo.name}
          </label>
        </li>
      ))}
    </section>
  );
};

export default TodoList;
