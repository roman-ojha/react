type OscarProps = {
  // React component as children props
  children: React.ReactNode;
};

const Oscar = (props: OscarProps) => {
  return <>{props.children}</>;
};

export default Oscar;
