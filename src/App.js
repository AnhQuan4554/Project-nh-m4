import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Currently_day from "./Currently_day/Currently_day";
import Header from "./Header/Header";
import Nav from "./Header/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HourlyWeather from "./pages/HourlyWeather";
const App = () => {
  const [inforWeather, setInforWeather] = useState(null);
  return (
    <div>
      {/* <Header inforWeather={inforWeather} setInforWeather={setInforWeather} /> */}
      <Nav />
      <Currently_day inforWeather={inforWeather} />
      {/*  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hourly" element={<HourlyWeather />} />
      </Routes>
    </div>
  );
};

export default App;
