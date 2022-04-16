import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";
//   but if we will run the test only after doing previous kind of work then it will throw an error because inside the 'TodoFooter' component we have use 'Link' which comes form react-router-dom but we can only be able to use 'Link' when we had wrap the parent component which 'BrowserRouter' but we are testing this component in complete isolation react testing library is not being able to find out the 'BrowserRouter' so for using 'Link' it will throw an error to solve that problem we have to creat the parent component which will wrap by 'BrowserRouter'
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <>
      <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        {/* no */}
      </BrowserRouter>
      ;
    </>
  );
};

it("should render the correct amount of incomplete tasks", () => {
  //   render(<TodoFooter numberOfIncompleteTasks={5} />);
  //   now here we will pass number of incomplete task as props while rendering 'TodoFooter' component
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  // now rather then rendering 'TodoFooter' component we will render the parent component so that we can be able to use 'BrowserRouter'
  let paragraphElement = screen.getByText(/5 tasks left/i);
  // here we are getting the element with the given text
  expect(paragraphElement).toBeInTheDocument();
});

it("should render 'task' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  let paragraphElement = screen.getByText(/1 task left/i);
  // here we are getting the element with the given text
  expect(paragraphElement).toBeInTheDocument();
});

it("should render 'task' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  let paragraphElement = screen.getByText(/1 task left/i);
  // here we are getting the element with the given text
  expect(paragraphElement).toBeTruthy();
  //   we can use a lots of assertion like 'toBeTruthy()' and we can see the description or functionality about these function by hovering on these function in vscode
});

it("should render 'task' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  let paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
  //   here 'toBeVisible' will check does the element is visible to the use or not
});

it("should render 'task' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  let paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML("p");
  //   here 'toContainHTML' will check does the element is if given tag element
});

it("should render 'task' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  let paragraphElement = screen.getByTestId("para");
  expect(paragraphElement).toHaveTextContent("1 task left");
});

it("should render 'task' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  let paragraphElement = screen.getByTestId("para");
  expect(paragraphElement).not.toContainHTML("div");
  // and also we can use '.not' to check using !
});

it("should render 'task' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  let paragraphElement = screen.getByTestId("para");
  expect(paragraphElement).not.toBeFalsy();
});

it("should render 'task' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  let paragraphElement = screen.getByText("1 task left");
  expect(paragraphElement.className).toBe("paragraph");
  //   and also we can get the attribute of the those element like 'className' and check through that attribute
  expect(paragraphElement.textContent).toBe("1 task left");
});
