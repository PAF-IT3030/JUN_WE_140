import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from './Pages/MyProfile';
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
              path="/MyProfile"
              element={ <MyProfile />}
            />
          </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
