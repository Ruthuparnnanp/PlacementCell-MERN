import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminAddDepartment from "./Pages/AdminAddDepartment";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminAddCourse from "./Pages/AdminAddCourse";
import AdminViewCell from "./Pages/AdminViewCell";
import AdminViewStudents from "./Pages/AdminViewStudents";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/department" element={<AdminAddDepartment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/course" element={<AdminAddCourse />}></Route>
        <Route path="/viewcell" element={<AdminViewCell />}></Route>
        <Route path="/viewstudent" element={<AdminViewStudents />}></Route>
      </Routes>
    </>
  );
}

export default App;
