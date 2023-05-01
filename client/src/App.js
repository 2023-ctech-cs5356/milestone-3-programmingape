import React, { useState, useEffect } from "react";
import './App.css';
import Login from "./pages/Login";
import MainPage from "./pages/HomePage";
import LogoutPage from "./pages/LogoutPage";
import Signup from "./pages/SignupPage";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route
          path="/" 
          element={<MainPage />}
        />
        <Route
          path="/login" 
          element={<Login />} 
        />
        <Route
          path="/register"
          element={<Signup />}
        />
        <Route exact path="/logout" element={<LogoutPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
