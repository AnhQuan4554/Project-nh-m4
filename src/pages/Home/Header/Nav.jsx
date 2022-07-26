import React,{useEffect,useState} from "react";
import { S_Navigate } from "./Header_CSS";
import { BrowserRouter, Routes, Route, Link ,NavLink } from "react-router-dom";
const Nav = () => {
 const active = `Navigate_link active`
  return (
    <S_Navigate className='Navigate'>
      <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? active : undefined
            }
          >
            Hôm nay
          </NavLink>
          <NavLink
            to="HourlyForecast"
            className={({ isActive }) =>
              isActive ? active : undefined
            }
          >
           Hàng giờ
          </NavLink>
          <NavLink
            to="Index" //in dex này trong component fiveday_forecast
            className={({ isActive }) =>
              isActive ? active : undefined
            }
          >
           5 ngày
          </NavLink>
    </S_Navigate>
  );
};

export default Nav;