import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // when user visit the website, user have not logged in yet for we will initialized user as null
  // In this case we can't rely on typescript inference rather we have to specify the type of the variable
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    //
    setUser({
      name: "Roman",
      email: "roman@example.com",
    });
  };
  const handleLogout = () => {
    // when user logged out set user as null
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h1>User name: {user?.name}</h1>
      <h2>User email: {user?.email}</h2>
    </div>
  );
};

export default User;
