import { useState } from "react";
import "./App.css";
import UserList from "./Components/UserList";
import UserForm from "./Components/userForm.jsx";

function App() {
  const [user, setUser] = useState(null);
  const addUserFunc = (value) => {
    setUser(value);
  };
  return (
    <>
      <UserList newUser={user} />
      <UserForm addUser={addUserFunc} />
    </>
  );
}

export default App;
