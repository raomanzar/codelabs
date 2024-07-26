import { useEffect, useState } from "react";
import { useContextFunc } from "../store/context.jsx";

const UserList = ({ newUser }) => {
  const userList = useContextFunc();
  const [data, setData] = useState(userList);

  const handleDelete = (id) => {
    const newArr = data.filter((item) => item.id !== id);
    setData(newArr);
  };

  const addNewUser = () => {
    setData((prev) => [...prev, { ...newUser, id: data.length + 1 }]);
  };

  useEffect(() => {
    if (newUser) {
      addNewUser();
    }
  }, [newUser]);
  return (
    <>
      <h1>Users List</h1>
      {data && (
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, indx) => (
              <tr key={indx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      ;
    </>
  );
};

export default UserList;
