import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // The right thing to do is first check whether user is null or not and then access the property
  // But you as the developer would know that the value of user will be set to 'AuthUser' very soon after the component mount and will never be null in the future
  // and let's assume that you can't logout from this component
  // In such cases you can if you want to use Type assertion to let typescript know that the user is always be type of 'AuthUser' and won't be null and for type assertion
  const [user, setUser] = useState<AuthUser>(
    // now we will provide the initial value as 'AuthUser'
    {} as AuthUser
  );
  const handleLogin = () => {
    setUser({
      name: "Roman",
      email: "roman@example.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <h1>User name: {user.name}</h1>
      <h2>User email: {user.email}</h2>
    </div>
  );
};

export default User;
