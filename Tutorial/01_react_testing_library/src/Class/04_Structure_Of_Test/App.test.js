import { render, screen } from "@testing-library/react";
import App from "./App";

/*
  *) Structure of Test:
    => Test Block
      -> render a component we to test
      -> Find elements we want to interact with
      -> Interact with those element
      -> Assert that the result are as expected
    => you can use 'test' or 'it' to make the test block
*/

test("renders learn react link", () => {
  // here this is one Test Block
  // here test(<What_we_are_going_to_test>,()=>{<logic_to_execute_test>})

  // firstly we have to specify which component we are testing
  // we can do that by rendering that component into the virtual dom of that test
  render(<App />);
  // here we are rendering 'App' component

  // second we have to find the element that we want to interact like it could be component or div,span.. etc html element
  const linkElement = screen.getByText(/learn react/i);
  // here we are finding the link element

  // third after getting those element now we have to interact with those element

  // lastly we would Assert that the result are as expected
  expect(linkElement).toBeInTheDocument();
  // here we are expecting 'linkElement' to be inside the Document
});

it("Hello", () => {});
