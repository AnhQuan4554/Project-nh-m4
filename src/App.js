import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Currently_day from "./pages/Home/Currently_day/Currently_day";
import Header from "./pages/Home/Header/Header";
import Nav from "./pages/Home/Header/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import HourlyWeather from "./pages/HourlyWeather";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import AddToDo from "./pages/addTodo";
import Planned from "./pages/planned";
import HourlyForecast from "./components/HourlyForecast";
import Footer from "./Footer";
const App = () => {
  const [inforWeather, setInforWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  /*  xử lí địa điểm lúc đăng nhập  */
  const [currentLocation, setCurrentLocation] = useState({
    // currentLocation là tên thành phố và quốc giá
    city: "",
    country: "",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      //check if geolocation is available
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      console.log("Geolocation is not available");
    }
  }, []);
  function onSuccess(position) {
    let { latitude, longitude } = position.coords;
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=45d7160a0b1b4642b8333b74383909ba`
    )
      // convert latitude and longitude to address
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results[0].components.city);
        // console.log(data.results[0].components.country);
        setCurrentLocation({
          city: data.results[0].components.city,
          country: data.results[0].components.country,
        });
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }
  function onError(error) {
    if (error.code == 1) {
      alert("You have just denied location request!"); // user denied location request
    } else if (error.code == 2) {
      alert("Location not available");
    } else {
      alert("Something went wrong");
    }
  }
  /* xử lí địa điểm  */
  return (
    /* ///////////////////////////////////////////////////////////////// */
    <div>
      <Header
        currentLocation={currentLocation}
        inforWeather={inforWeather}
        setInforWeather={setInforWeather}
        setHourlyWeather={setHourlyWeather}
      />
      {/* <Nav/>
      <Currently_day  inforWeather={inforWeather}/> */}
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentLocation={currentLocation}
              inforWeather={inforWeather}
              setInforWeather={setInforWeather}
            />
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/HourlyForecast"
          element={
            <HourlyWeather
              inforWeather={inforWeather}
              hourlyWeather={hourlyWeather}
            />
          }
        />
        <Route path="/addtodo" element={<AddToDo />} />
        <Route path="/planned" element={<Planned />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
