const name = "My name is Roman Ojha";

export default name;
// here we are exporting this name variable now this variable can be able to access by any file
// we can use 'default' only one time while export

const favprog = "React js";
// Now how to pass another data;

function myName() {
  let name = "Roman";
  return name;
}

function myNames() {
  let name = "Roman Ojha fdsa";
  return name;
}

export { favprog, myName, myNames };
// Now this is the way to export the not default data
