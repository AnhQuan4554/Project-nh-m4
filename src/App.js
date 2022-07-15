import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'
import Currently_day from './Currently_day/Currently_day'
import Header from './Header/Header'
import Nav from './Header/Nav'
import logo from './logo.svg';
import './App.css';
const App = () => {
  const [inforWeather, setInforWeather] = useState(null)
  return (
    <div>
        <Header inforWeather={inforWeather}
          setInforWeather = {setInforWeather}
        />
        <Nav/>
        <Currently_day inforWeather={inforWeather}/>
    </div> 
  )
}

export default App