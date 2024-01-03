import { useState, createContext } from "react";

type AuthUser = {
  name: string;
  email: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

//
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

// initial value of user context will using as
export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  // here user context is for managing the authenticated state of the user
  // when user is logged in context should hold the user information
  // this context should provide the function to login in and logout and the object of type 'AuthUser' if they are logged in
  // If user logged out context value = null
  // If user logged in context value = AuthUser

  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    // value would going to be the object where 'user' is the auth user information & 'setUser' will be to set the value of the user information
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
