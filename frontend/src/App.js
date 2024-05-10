import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import { Box } from "@mui/material";
import Navbar from "./Components/NavBar";
import { store } from "./Redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const {auth} = useSelector(store => store);

  useEffect(() => {
    // dispatch(getProfileAction(jwt));
  }, []);
  return (
    <Box>
      <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/*" element={<LoginPage />} />
        </Routes> 
    </Box>
  );
}

export default App;
