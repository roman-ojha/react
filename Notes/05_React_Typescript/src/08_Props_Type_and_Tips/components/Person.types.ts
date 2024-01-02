// create a new Person type
export type Name = {
  first: string;
  last: string;
};

// when you are working with big project you might have to use props types in different files in that case try to add props to different files and export it
export type PersonProps = {
  name: Name;
};
