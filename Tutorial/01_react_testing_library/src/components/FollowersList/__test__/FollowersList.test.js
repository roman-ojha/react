import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowerList = () => {
  return (
    <>
      <BrowserRouter>
        <FollowersList />
      </BrowserRouter>
    </>
  );
};

describe("FollowersList", () => {
  it("should test in async", async () => {
    //   because the element that we are getting will only get render when it will completed fetch data form the api so it means that it will take time to render that element so we have to async
    render(<MockFollowerList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    // because the element is async we can use getByTestId we have to use findByTestId
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render multiple followers items", async () => {
    render(<MockFollowerList />);
    const followerDivElement = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElement.length).toBe(5);
  });
});
