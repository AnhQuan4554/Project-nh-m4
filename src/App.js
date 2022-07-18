import React,{useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import Currently_day from './Currently_day/Currently_day'
import Header from './Header/Header'
import Nav from './Header/Nav'
import Login from './Authentication/Login'// đăng nhập
import Signup from './Authentication/Signup'// đăng kí
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/index'
import HourlyWeather from './pages/HourlyWeather'
const App = () => {
  // Get user's current position-------------------
  const [currentLocation, setCurrentLocation] = useState({
    city: '',
    country: '',
  })
  console.log(currentLocation,'biến đây mà')
  currentLocation.city&& console.log('có thành phố rồi nhé ',currentLocation.city)
  useEffect(() => {
    if (navigator.geolocation) { //check if geolocation is available
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      console.log("Geolocation is not available");
    }
  }, [])
  function onSuccess(position) {
    let {latitude , longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=45d7160a0b1b4642b8333b74383909ba`)
    // convert latitude and longitude to address
    .then(response => response.json())
    .then(data => {
      // console.log(data.results[0].components.city,);
      // console.log(data.results[0].components.country);
      setCurrentLocation({
        city: data.results[0].components.city,
        country: data.results[0].components.country,
      })
    })
  }
  function onError(error) {
    if (error.code == 1) {
      alert('You have just denied location request!')// user denied location request
    }
    else if (error.code == 2) {
      alert('Location not available')
    } else {
      alert('Something went wrong')
    }
  }
  // ----------------------------------------------------------------
  
  
  const [inforWeather, setInforWeather] = useState(null)
  return (
    <div>
      <Login/>
{/*      
        <Header inforWeather={inforWeather} 
          setInforWeather = {setInforWeather}
        />
        <Nav/> 
        <Currently_day inforWeather={inforWeather}/>
        
        <Home inforWeather={inforWeather}/> */}
        
        {/* <Routes>


        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes> */}

    </div> 
  )
}

export default App