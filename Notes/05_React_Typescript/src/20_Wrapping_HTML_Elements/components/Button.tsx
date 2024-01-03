// We want to create the custom button from html element and want to pass the required props to customize the button as we wanted

// And we want to specify types which should include html button props with addition to our custom props
type ButtonProps1 = {
  variant: "primary" | "secondary";
  // so here now 'React.ComponentProps<"button">' is the type of html button props where we are including all the attributes means props of html 'button' element into 'ButtonProps'
} & React.ComponentProps<"button">;
// NOTE: that by default in 'children' props you can pass any sort of react component tree, but what if we want to restrict the type that can be passable to 'children' prop, in that case we want to 'Omit' the exclude the 'children' props from 'React.ComponentProps<"button">' type so that we can define our one custom 'children' type

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
  // NOTE: that by default in 'children' props you can pass any sort of react component tree, but what if we want to restrict the type that can be passable to 'children' prop, in that case we want to 'Omit' the exclude the 'children' props from 'React.ComponentProps<"button">' type so that we can define our one custom 'children' type
} & Omit<React.ComponentProps<"button">, "children">;

const CustomButton = ({
  variant,
  children,
  ...rest
}: ButtonProps): React.JSX.Element => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
