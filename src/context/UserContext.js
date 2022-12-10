// ? import the React Context Function and the state management functions
import React, { createContext, useState, useEffect } from "react";
// ? Track the Authentication of the User
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// ? Instantiate the UserContext
export const UserContext = createContext();

// ? This is the User Provider Component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // ? useEffect to run once the application mounts
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  
  console.log(user);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
