import { useState } from "react";
import { useContextFunc } from "../store/context.jsx";

const UserForm = () => {
  const { addNewUser } = useContextFunc();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) {
      return alert("Please fill all fields");
    }
    const newUser = { name, age };
    addNewUser(newUser);
    setName("");
    setAge("");
  };
  return (
    <>
      <div className="bg-gray-300 p-5 rounded-lg flex flex-col gap-4 h-72">
        {" "}
        <h1>Add User</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="p-2 rounded"
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="p-2 rounded"
            value={age}
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
