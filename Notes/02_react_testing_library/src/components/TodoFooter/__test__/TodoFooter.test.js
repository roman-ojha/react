import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";
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

describe("TodoFooter", () => {
  // now here we are wrapping test inside the describe block
  // so this is best way to organize our test

  describe("Function 1", () => {
    // nested describe block
    it("should render the correct amount of incomplete tasks", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      let paragraphElement = screen.getByText(/5 tasks left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  it("should render 'task' when the number of incomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    let paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
