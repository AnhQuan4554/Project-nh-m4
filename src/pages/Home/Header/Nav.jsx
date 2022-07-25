import React,{useEffect,useState} from "react";
import { S_Navigate } from "./Header_CSS";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Nav = () => {
  const [isActive, setIsActive] = useState(false)
  useEffect(()=>{
    
  })
  return (
    <S_Navigate className='Navigate'>
      <div  className={isActive ? "Navigate_link active" :"Navigate_link" }> {/* active hiện border  */}
          <Link to="/">Hôm nay </Link> {/* chỗ này để điền link */}
      </div>
      <div  className={isActive ? "Navigate_link active" :"Navigate_link" }>
          <Link to="HourlyForecast">Hàng giờ </Link> {/* chỗ này để điền link */}
      </div>
      <div  className={isActive ? "Navigate_link active" :"Navigate_link" }>
        <Link to="Index">5 ngày </Link> {/* chỗ này để điền link */}
      </div>
    </S_Navigate>
  );
};

export default Nav;
