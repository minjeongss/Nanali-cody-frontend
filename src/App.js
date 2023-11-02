import React, { useEffect, useState } from 'react';
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Login from "./pages/LoginPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Signup.jsx";
import Weather from "./pages/WeatherPage.jsx";
import Preference from "./pages/PreferencesPage.jsx";
import Layout from "../src/components/Nav.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>//네비바 적용 페이지들
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/preference" element={<Preference />} />
            <Route path="/weather" element={<Weather />} />
            
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
