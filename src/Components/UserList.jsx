import { useEffect, useState } from "react";
import { useContextFunc } from "../store/context.jsx";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Pagination from "../customHooks/pagination/Pagination.jsx";

const UserList = () => {
  const { usersList, newUser } = useContextFunc();
  const [data, setData] = useState(usersList);
  const {
    numbers,
    records,
    page,
    handleForward,
    handleCurrentPage,
    handleBackward,
  } = Pagination(data, 5);

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
      <style>
        {`
          table {
            border-collapse: separate;
            border-spacing: 0;
            border: 1px solid #ccc;
            border-radius: 10px;
            overflow: hidden;
            height: 20rem;
          }
          thead {
            border-radius: 10px 10px 0 0;
          }
          tbody {
            border-radius: 0 0 10px 10px;
          }
          .active {
            background-color: #4A5568; 
            color: #F7FAFC; 
          }
        `}
      </style>

      <div className="flex flex-col gap-4 w-96 text-center">
        <h1>Users List</h1>
        {records && (
          <>
            <table>
              <thead className="bg-gray-300 text-white w-full font-bold">
                <tr className="rounded w-full bg-gray-300">
                  <td className="py-2">ID</td>
                  <td className="py-2">Name</td>
                  <td className="py-2">Age</td>
                  <td></td>
                </tr>
              </thead>
              <tbody className="text-center rounded-b-lg border">
                {records.map((item, indx) => (
                  <tr key={indx}>
                    <td className="py-2">{item.id}</td>
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">{item.age}</td>
                    <td>
                      <div className="py-1 hover:cursor-pointer hover:bg-red-400 rounded transition duration-300 ease-in-out w-1/2">
                        <DeleteIcon onClick={() => handleDelete(item.id)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center w-full mt-4">
              <ChevronLeftIcon
                onClick={handleBackward}
                className="rounded-full hover:cursor-pointer hover:bg-gray-500 hover:text-gray-100"
              />
              {numbers.map((value, indx) => (
                <a
                  key={indx}
                  className={`text-gray-500 px-2 rounded-full hover:cursor-pointer hover:bg-gray-500 hover:text-gray-100 ${
                    value === page ? "active" : ""
                  }`}
                  onClick={() => handleCurrentPage(value)}
                >
                  {value}
                </a>
              ))}
              <ChevronRightIcon
                onClick={handleForward}
                className="rounded-full hover:cursor-pointer hover:bg-gray-500 hover:text-gray-100"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserList;
