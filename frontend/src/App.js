import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from './Pages/ProfilePage';
import LoginPage from './Pages/LoginPage';


function App() {
  return (
    < >
      {/* <HomePage/> */}
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={ <HomePage /> }
            />
            <Route
              path="/profile"
              element={ <ProfilePage />}
            />
          </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
