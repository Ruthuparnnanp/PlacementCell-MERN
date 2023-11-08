import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminAddDepartment from "./Pages/AdminAddDepartment";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/department" element={<AdminAddDepartment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
