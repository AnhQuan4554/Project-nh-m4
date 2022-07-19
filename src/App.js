import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Currently_day from './Currently_day/Currently_day'
import Header from './Header/Header'
import Nav from './Header/Nav'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/index'
import HourlyWeather from './pages/HourlyWeather'
import AddToDo from './pages/addTodo'
import Planned from './pages/planned'
const App = () => {
  const [inforWeather, setInforWeather] = useState(null)

  return (
    <div>

      <Routes>

        <Route path="/addtodo" element={<AddToDo />} />
        <Route path="/planned" element={<Planned />} />
      </Routes>
    </div>
  )
}

export default App