"use client";
import Navbar from "@/components/Second/Navbar";
import Sidebar from "@/components/Second/Sidebar";
import TodoList from "@/components/Second/TodoList";
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  // Now in this example we will going to use signal library from preact
  // because of these kind of the problem we are going to use signals: https://preactjs.com/blog/introducing-signals/
  // npm install @preact/signals-react

  return (
    <div className="wrapper">
      <Navbar />
      <main
        className="flex items-center justify-center"
        style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}
      >
        <TodoList />
        <Sidebar />
      </main>
    </div>
  );
}
