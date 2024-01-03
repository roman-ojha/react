import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "Roman",
      email: "roman@example.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h1>User name:{userContext.user?.name}</h1>
      <h2>User email: {userContext.user?.email}</h2>
    </div>
  );
};

export default User;
