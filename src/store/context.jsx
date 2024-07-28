import { createContext, useContext, useState } from "react";
import { usersList } from "../constant/demmyData";
const Context = createContext();

const Store = ({ children }) => {
  const [newUser, setNewUser] = useState(null);

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
