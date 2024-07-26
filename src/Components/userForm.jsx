import { useState } from "react";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, age };
    addUser(newUser);
    setName("");
    setAge("");
  };
  return (
    <>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={age}
          type="text"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;
