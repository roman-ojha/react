"use client";
import Navbar from "@/components/First/Navbar";
import Sidebar from "@/components/First/Sidebar";
import TodoList from "@/components/First/TodoList";
import { FormEvent, useEffect, useState } from "react";

export type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

export default function Home() {
  // Here we can see that we are creating todo state and adding and toggle todo from the main page and we are passing todos state into Navbar & TodoList component
  // because of this whenever we are changing the state of this component all the children component will get rerender
  // But in this case the only component that should be rerender be Navbar & TodoList
  // because of these kind of the problem we are going to use signals: https://preactjs.com/blog/introducing-signals/
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
    <div className="wrapper">
      <Navbar todos={todos} />
      <main
        className="flex items-center justify-center"
        style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}
      >
        <TodoList addTodo={addTodo} toggleTodo={toggleTodo} todos={todos} />
        <Sidebar />
      </main>
    </div>
  );
}
