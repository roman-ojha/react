import { useId } from "react";

const EmailFormUseId = (): React.JSX.Element => {
  const id = useId();
  // so that way this 'useId' hook works is it will actually generate the same id every single time it render into the page. so, if the page render exactly the same every time, react will give the same set of id and it is very important when you're trying to do things with server side rendering and client side rendering
  // One of the biggest problem with generate id using math.random way was it you server renders some of your pages and client render some of your components, then id would mismatch if they're trying to point to the same element becaus when you run math.random on you server and you run math.random on you client you will get two different numbers

  return (
    <>
      <label htmlFor={id}>Email</label>
      <input type="text" id={id} />
      <br />
      {/* If you have multiple field to generate id rather then using multiple 'useId' we can make meaningful changes to the same id that react provide */}
      <label htmlFor={id + "-email"}>Email</label>
      <input type="text" id={id + "-email"} />
      <label htmlFor={id + "-name"}>Email</label>
      <input type="text" id={id + "-name"} />
    </>
  );
};

export default EmailFormUseId;
