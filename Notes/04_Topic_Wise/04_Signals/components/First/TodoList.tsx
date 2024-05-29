"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Todo } from ".";

const TodoList: React.FC<{
  todos: Todo[];
  addTodo: (name: string) => void;
  toggleTodo: (id: string, checked: boolean) => void;
}> = ({ addTodo, toggleTodo, todos }): React.JSX.Element => {
  const [input, setInput] = useState("");

  return (
    <section>
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
