type GreetProps = {
  name: string; // string type
  messageCount: number; // number type
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? "Welcome {props.name}! you have {props.messageCount} unread message"
          : "Welcome guest"}
      </h1>
    </div>
  );
};

export default Greet;
