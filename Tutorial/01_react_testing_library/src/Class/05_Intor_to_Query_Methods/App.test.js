import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  let linkElement = screen.getByText(/learn react/i);
  // screen : screen is the way to interact with the component that we render
  // getByTest : to get the element that has the text 'learn react'
  // and we are expecting that text element would be linked element
  linkElement = screen.findAllByPlaceholderText();
  // this will return the array that match the condition
  // 'findAllBy<>' will return list of array
  linkElement = screen.findByText();
  // 'findBy<>' will return one element that match the condition
  linkElement = screen.getAllByAltText();
  // 'getAllBy<>'
  linkElement = screen.getByDisplayValue();
  // 'getBy<>'
  linkElement = screen.queryAllByTitle();
  // 'queryAllBy<>'
  linkElement = screen.queryByTitle();
  // 'queryBy<>'
  expect(linkElement).toBeInTheDocument();
  // NOTE: we can see the different of these in './Query_Methods.png'
});

it("Hello", () => {});
