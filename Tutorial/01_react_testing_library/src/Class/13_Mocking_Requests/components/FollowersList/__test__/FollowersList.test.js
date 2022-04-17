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

/*
  -> so Note that in this case we have to moke axios so to do that what we will going to do is we will going to create folder called '__mocks__' inside the src directory
  -> and after that the filename needs to be exactly the same that we want to mock example in this case 'axios.js'
  -> and we will write the mock there but after create mock for axios that will through an error because react by default will resetting our mock every single time
    -> to solve that problem we have to do some work inside the 'node_modules/react-script/scripts/utils/createJestConfig.js'
    -> and inside that file on 'resetMocks:false'
    -> NOTE: we would not recommend to do this to go and change the script inside the 'node_modules' rather then that we can use 'Jest' library to Mock Asynchronous function
*/

describe("FollowersList", () => {
  it("should test in async", async () => {
    render(<MockFollowerList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    screen.debug();
    // screen.debug() -> will display the rendered result
    expect(followerDivElement).toBeInTheDocument();
  });

  // it("should render multiple followers items", async () => {
  //   render(<MockFollowerList />);
  //   const followerDivElement = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElement.length).toBe(5);
  // });
});
