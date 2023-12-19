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
  beforeEach(() => {
    // before each hook
    console.log("Running before each test");
    // now this peace of function will run before all the test that we will implement inside this describe block
  });
  // sometimes we want to run peace of function once before every test
  beforeAll(() => {
    // now this peace of function will run once all the described test
    console.log("Ran Once before all test");
  });
  afterEach(() => {
    console.log("Running after each test");
    // now this peace of function will run after all the test that we will implement inside this describe block
  });
  afterAll(() => {
    console.log("Ran after all test");
    // now you know what would happen here
  });
  // NOTE: sometime you might want to do this may be we have a bunch of test that have a similar functionality what we can do is we can place that functionality before each hook and may be we want to clean our test we can put the functionality after each hooks
  it("should test in async", async () => {
    render(<MockFollowerList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should test in async", async () => {
    render(<MockFollowerList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });
  it("should test in async", async () => {
    render(<MockFollowerList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });
  it("should test in async", async () => {
    render(<MockFollowerList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });
});
