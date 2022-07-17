import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./pages/Home";
import HourlyWeather from "./pages/HourlyWeather";

const App = () => {
  const [inforWeather, setInforWeather] = useState(null);
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hourly" element={<HourlyWeather />} />
      </Routes>
    </>
  );
};

export default App;
