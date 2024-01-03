import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // typing using state hook where the initial value is only known in future point in time

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}></button>
      <button onClick={handleLogout}></button>
      <h3>User is {isLoggedIn ? "logged in" : "logged out"}</h3>
    </div>
  );
};

export default LoggedIn;
