import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <>
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    </>
  );
};

const addTask = (Tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  Tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should add and display todo", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Go to shopping" } });
    fireEvent.click(buttonElement);
    // now here we had completed inputting value inside the input element and click button after that it should add to the todo list so we will check that now
    const divElement = screen.getByText(/Go to shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should add and display Multiple todo", () => {
    render(<MockTodo />);
    addTask(["Go to shopping", "Pet my Cat", "Wash my Hands"]);
    // we can make a function and add multiple todo's
    const divElement = screen.getAllByTestId("task-container");
    // now we can get the array of task by TestID
    expect(divElement.length).toBe(3);
  });

  it("task should not have completed class when initially rendered", () => {
    //   now we want to test when we will click on one task as a completed task then the style should change
    render(<MockTodo />);
    addTask(["Go to shopping"]);
    const divElement = screen.getByText(/Go to shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when clicked", () => {
    render(<MockTodo />);
    addTask(["Go to shopping"]);
    const divElement = screen.getByText(/Go to shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
