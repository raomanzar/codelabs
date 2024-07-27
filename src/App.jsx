import "./App.css";
import UserList from "./Components/UserList";
import UserForm from "./Components/userForm.jsx";

function App() {
  return (
    <div className="flex gap-7 items-center justify-center w-full ">
      <UserList />
      <UserForm />
    </div>
  );
}

export default App;
