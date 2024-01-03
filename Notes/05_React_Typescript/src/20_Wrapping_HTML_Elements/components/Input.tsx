type InputProps = React.ComponentProps<"input">;

const Input = (props: InputProps): React.JSX.Element => {
  return <input {...props} />;
};

export default Input;
