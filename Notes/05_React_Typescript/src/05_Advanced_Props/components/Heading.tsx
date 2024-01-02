// Children props type
type HeadingProps = {
  // Here children is just an string
  children: string;
};
const Heading = (props: HeadingProps) => {
  return <h1>{props.children}</h1>;
};

export default Heading;
