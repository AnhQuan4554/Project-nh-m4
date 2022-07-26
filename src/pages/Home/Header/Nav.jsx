import React from "react";
import { S_Navigate } from "./Header_CSS";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
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
          5 ngày
        </NavLink>
      </div>
    </S_Navigate>
  );
};

export default Nav;
