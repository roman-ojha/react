/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */
// we can hard code all of the position that is defined above but we can go through another approach using template literal

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps1 = {
  // provide the template literal type, and typescript will infer all the position combination of types that would be there
  position: `${HorizontalPosition}-${VerticalPosition}`;
};

type ToastProps = {
  // But we do have a problem in above 'ToastProps1' position can also be 'center-center' we would ranter prefer only 'center'
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
