import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    // here now we have to render 'AddInput' component but we know that we have to pass the props like in 'todos' we can easily pass empty array because that is just the state but for the 'setTodos' that is the function because we don't care about what happen in parent component what we can do is just to pass empty function of mocked function
    let inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // now here we will get the input element by placeholder
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    let inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // now we have to fire the event to type inside the text input field to do that we have 'fireEvent' function indie the react testing library
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    // 'fireEvent' have lots of event but we want to change the value inside the input field so we will use 'change()'
    // change(<input_Element_That_we_want_to_change>,{<what_we_want_to_change>:{<>:<value>}})
    expect(inputElement.value).toBe("Go Grocery Shopping");
    // after we insert value inside the input element we can now check does that value is inside the input element
  });

  it("should have empty input when add button is clicked", () => {
    // now here we will test when we will click on add button the value of input field need to change to ""
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    let inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/ });
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    fireEvent.click(buttonElement);
    // now here we have input the value inside the input element and click the button now we will except to have "" inside the input field
    expect(inputElement.value).toBe("");
  });
});
