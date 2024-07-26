import { createContext, useContext } from "react";

const Context = createContext();

const Store = ({ children }) => {
  const users = [
    { id: 1, name: "Alice", age: 23 },
    { id: 2, name: "Bob", age: 27 },
    { id: 3, name: "Charlie", age: 21 },
    { id: 4, name: "Dave", age: 29 },
    { id: 5, name: "Eve", age: 25 },
  ];

  return <Context.Provider value={users}>{children}</Context.Provider>;
};

export const useContextFunc = () => {
  const value = useContext(Context);
  return value;
};

export default Store;
