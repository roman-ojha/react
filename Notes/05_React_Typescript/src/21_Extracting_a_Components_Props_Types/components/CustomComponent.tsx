import Greet from "./Greet";

// let's that CustomComponent accept the same props as './Greet.tsx' component
// we know we can export 'GreetProps' types from './Greet.tsx' but we don't want to right now because if some library provides custom components and have not exported it's type then we should be able to extract type of that component by ourself

// in that cases we can use 'React.ComponentProps<typeof Greet>'
type CustomComponentProps = React.ComponentProps<typeof Greet>;

const CustomComponent = (props: CustomComponentProps): React.JSX.Element => {
  return (
    <>
      <h1>
        {props.isLoggedIn
          ? "Welcome {props.name}! you have {props.messageCount} unread message"
          : "Welcome guest"}
      </h1>
    </>
  );
};

export default CustomComponent;
