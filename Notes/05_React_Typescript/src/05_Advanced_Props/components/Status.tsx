type StatusProps = {
  // union of string literal as status type rather then string
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  if (props.status == "loading") {
    return <h1>Loading...</h1>;
  } else if (props.status == "error") {
    return <h1>Error Fetching data</h1>;
  } else if (props.status == "success") {
    return <h1>Data fetched successfully!</h1>;
  }
  return <h1></h1>;
};

export default Status;
