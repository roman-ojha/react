import { useEffect, useRef } from "react";

const DomRef = () => {
  // provide the type of element in ref
  // by default it will going to be null
  // But if you are sure that it will never be null when you access it you can add non-null assertion 'null!'
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    // by default it is null
    // inputRef.current?.focus();

    // but if we are using non-null assertion 'null!' we can avoid optional chaining because whenever component will get mounted 'inputRef' will not going to be null
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
