import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into title prop", () => {
  render(<Header title="My Headers" />);
  let headingElement = screen.getByText(/My Headers/i);
  expect(headingElement).toBeInTheDocument();
});
