import { useState } from "react";

const LoggedIn = () => {
  // typescript automatically infer 'isLoggedIn' as boolean when we use default value as boolean type
  // for the simple type we don't have to worry about any thing typescript can handle for us
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
