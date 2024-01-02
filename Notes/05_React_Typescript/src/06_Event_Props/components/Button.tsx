type ButtonProps = {
  // sometimes you don't have to pass any parameter
  handleClick1: () => void;
  // sometimes you have to use event inside function, for that use MouseEvent from react, also specify which element is triggering the mouse event
  handleClick2: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClick3: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={props.handleClick1}></button>
      <button onClick={(event) => props.handleClick3(event, 1)}></button>
    </>
  );
};

export default Button;
