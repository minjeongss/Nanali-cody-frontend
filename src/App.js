import React, { useEffect, useState } from 'react';
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Login from "./pages/LoginPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import Home from "./pages/Home.jsx";
import Weather from "./pages/WeatherPage.jsx";
import Preference from "./pages/PreferencesPage.jsx";
import Layout from "../src/components/Nav.jsx";
import Signup from './pages/Signup.jsx';
import Detail from './pages/Detail.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/preference" element={<Preference />} />
          <Route path="/weather" element={<Weather />} />
            
          
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
