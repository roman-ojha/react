import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElement = screen.getByText(/My Headers/i);
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElement = screen.getByRole("heading", { name: "My Headers" });
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop", async () => {
  render(<Header title="My Headers" />);
  let headingElement = await screen.findByText(/My Header/i);
  //   now here we are using 'findByText' which need to asynchronous
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});
