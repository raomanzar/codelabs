import { useEffect, useState } from "react";
import { useContextFunc } from "../store/context.jsx";
import DeleteIcon from "@mui/icons-material/Delete";

const UserList = () => {
  const { usersList, newUser } = useContextFunc();
  const [data, setData] = useState(usersList);

  const handleDelete = (id) => {
    const newArr = data.filter((item) => item.id !== id);
    setData(newArr);
  };

  const addNewUser = () => {
    setData((prev) => [...prev, { ...newUser, id: data.length + 1 }]);
    alert("New user has been added.");
  };

  useEffect(() => {
    if (newUser) {
      addNewUser();
    }
  }, [newUser]);
  return (
    <>
      <div className="flex flex-col gap-4  w-96 text-center">
        <h1>Users List</h1>
        {data && (
          <table className="border border-red-300 text-center rounded">
            <thead className="border border-blue-300 bg-gray-300 text-white w-full font-bold rounded ">
              <tr className="w-full bg-gray-300">
                <td className="py-2">ID</td>
                <td className="py-2">Name</td>
                <td className="py-2">Age</td>
              </tr>
            </thead>
            <tbody className="text-center">
              {data?.map((item, indx) => (
                <tr key={indx} className="border ">
                  <td className="py-2">{item.id}</td>
                  <td className="py-2">{item.name}</td>
                  <td className="py-2 ">{item.age}</td>
                  <td className="flex justify-center items-center ">
                    <div className="p-1 hover:cursor-pointer hover:bg-red-400 rounded-full transition duration-300 ease-in-out">
                      <DeleteIcon onClick={() => handleDelete(item.id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default UserList;
