import { render, screen } from "@testing-library/react";
import Header from "../Header";
// here we are important that component that we are trying to test

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  //   and we will render that component
  //   and also we know that we have to pass props when we want to render the 'Header' component
  let headingElement = screen.getByText(/My Headers/i);
  //   so here now we are getting element where text contain the same value that we pass as a props
  expect(headingElement).toBeInTheDocument();
  //   and now if we will run yarn test then it will check and test
});

// it("should render same text passed into title prop", () => {
//   render(<Header title="My Headers" />);
//   let headingElement = screen.getByRole("heading");
//   //   here we are getting element by 'heading'
//   expect(headingElement).toBeInTheDocument();
// });

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElements = screen.getAllByRole("heading");
  //   now here we are getting array of elements that is heading
  expect(headingElements.length).toBe(2);
  //   and here we are getting length of that array and expecting to be value 2
});

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElement = screen.getByRole("heading", { name: "My Headers" });
  // now if there is multiple heading inside the component or if we want to get the heading which content certain text then we will going to specify like this
  //   here {name:} 'name' will specify as the text inside the 'Role'
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElement = screen.getByTitle("Header");
  //   here we are getting element by title
  //   <h3 title="Header" className="header">
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElement = screen.getByTestId("header-1");
  //   here we are getting element by Text Id
  //    <h1 className="header" data-testid="header-1">{title}</h1>
  expect(headingElement).toBeInTheDocument();
});

// Find By

it("should render same text passed into title prop", async () => {
  render(<Header title="My Headers" />);
  let headingElement = await screen.findByText(/My Header/i);
  //   now here we are using 'findByText' which need to asynchronous
  expect(headingElement).toBeInTheDocument();
});

// Query By

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElement = screen.queryByText(/dogs/i);
  //   here now we querying element that have 'dogs' but we know that, that text doesn't exist
  expect(headingElement).not.toBeInTheDocument();
  //   and in here we are using not, which means that we don't expect 'dogs' element to be inside the document
});
