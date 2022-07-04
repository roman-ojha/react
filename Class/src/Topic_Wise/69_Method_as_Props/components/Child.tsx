import React from "react";

interface ChildProps {
  alertName: () => void;
}

const Child: React.FC<ChildProps> = ({ alertName }): JSX.Element => {
  return (
    <>
      <button onClick={alertName}>Alert Name</button>
      {/* now after getting the function instance that is being pass from parent component we can easily use it */}
    </>
  );
};

export default Child;
