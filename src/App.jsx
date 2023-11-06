import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./Pages/Index";
import AdminAddDepartment from "./Pages/AdminAddDepartment";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/department" element={<AdminAddDepartment />}></Route>
      </Routes>
    </>
  );
}

export default App;
