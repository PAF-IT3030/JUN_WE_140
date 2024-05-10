import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Components/NavBar";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <Box>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
