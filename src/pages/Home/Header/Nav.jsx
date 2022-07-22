import React from "react";
import { S_Navigate } from "./Header_CSS";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Nav = () => {
  return (
    <S_Navigate className='Navigate'>
      <div className="Navigate_link active"> {/* active hiện border  */}
          <Link to="/">Hôm nay </Link> {/* chỗ này để điền link */}
      </div>
      <div className="Navigate_link">
          <Link to="HourlyForecast">Hàng giờ </Link> {/* chỗ này để điền link */}
      </div>
      <div className="Navigate_link">
        <Link to="">5 ngày </Link> {/* chỗ này để điền link */}
      </div>
    </S_Navigate>
  );
};

export default Nav;
