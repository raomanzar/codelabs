import { createContext, useContext, useState } from "react";

const Context = createContext();

const Store = ({ children }) => {
  const [newUser, setNewUser] = useState(null);

  const usersList = [
    { id: 1, name: "Alice", age: 23 },
    { id: 2, name: "Bob", age: 27 },
    { id: 3, name: "Charlie", age: 21 },
    { id: 4, name: "Dave", age: 29 },
    { id: 5, name: "Eve", age: 25 },
  ];

  const addNewUser = (user) => {
    setNewUser(user);
  };
  return (
    <Context.Provider value={{ usersList, addNewUser, newUser }}>
      {children}
    </Context.Provider>
  );
};

export const useContextFunc = () => {
  const value = useContext(Context);
  return value;
};

export default Store;
