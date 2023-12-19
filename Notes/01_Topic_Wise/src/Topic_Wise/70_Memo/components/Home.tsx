import React, { memo } from "react";

interface HomeProps {
  data: number;
}

const Home: React.FC<HomeProps> = ({ data }): JSX.Element => {
  console.log(data);
  return (
    <>
      <h1>Data {data}</h1>
    </>
  );
};

//   so while change 'count' state for 'App' component this component is also being render to solve this issue we can use 'memo' memorization
export default memo(Home);
// now after warping 'Home' component with memo this home component will not get render again if the state of 'App'(parent) component get changed and if we haven't pass that state as prop
