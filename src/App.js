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
  const [hourlyWeather, setHourlyWeather] = useState(null);

  return (
    <div>
      <Header
        inforWeather={inforWeather} // quân
        setInforWeather={setInforWeather}
        setHourlyWeather={setHourlyWeather} //Khoi
      />
      <Nav /> {/* Quân */}
      {/* <Currently_day inforWeather={inforWeather} /> */}
      {/*  */}
      {/* <Home inforWeather={inforWeather} />{" "} */}
      {/* Sẽ chứa nội dung chính và Lịch */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              inforWeather={inforWeather}
              hourlyWeather={hourlyWeather}
              setHourlyWeather={setHourlyWeather}
            />
          }
        />
        {/*  Khôi */}
        <Route
          path="/hourly"
          element={
            <HourlyWeather
              inforWeather={inforWeather}
              hourlyWeather={hourlyWeather}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
