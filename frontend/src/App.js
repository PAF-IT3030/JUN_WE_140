import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import { Box } from "@mui/material";
import Navbar from "./Components/NavBar";
import CreateMeal from "./Pages/CreateMeal";
import CreateUpdate from "./Pages/CreateUpdate";
import DeleteMeal from "./Pages/DeleteMeal";

function App() {
  return (
    <Box>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Createmeal" element={<CreateMeal />} />
          <Route path="/Createupdates" element={<CreateUpdate />} />
          <Route path="/Deletemeal/:id" element={<DeleteMeal />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
