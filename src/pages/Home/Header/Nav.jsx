import React,{useEffect,useState} from "react";
import { S_Navigate } from "./Header_CSS";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
 const active = `Navigate_link active`
  return (
    <S_Navigate className="Navigate">
      <div className="wrapper">
        <NavLink className="Navigate_link" activeClassName="active" to="/">
          Hôm nay
        </NavLink>
        <NavLink
          className="Navigate_link"
          activeClassName="active"
          to="/HourlyForecast"
        >
          3 giờ
        </NavLink>
        <NavLink className="Navigate_link" activeClassName="active" to="Index">
          7 ngày
        </NavLink>
      </div>
    </S_Navigate>
  );
};

export default Nav;