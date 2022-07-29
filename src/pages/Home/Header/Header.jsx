import React, { useState, useEffect, createContext, useRef } from "react";
import styled from "styled-components";
import { FaSun } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//link css
import { S_Header, S_headLogo, S_headSearch, S_head_User } from "./Header_CSS";
import Input_search from "./Input_search";
import Header_withinLog from "./Header_withinLog";
import {handle_input} from"./Handle_input"
const Header = ({
  inforWeather,
  setInforWeather,
  currentLocation,
  setHourlyWeather,
  checkLogin,
  // user={user},
  user,
  setCheckLogin,
}) => {
  const unit = "metric"; // nếu muốn làm chức năng chọn đơn vị đo độ thì metric là độ C,
  const [nameLocal, setnameLocal] = useState("Hưng Yên"); // tên đia chỉ cần tìm
  // const [inforWeather, setInforWeather] = useState(null)//khác với cái trong fetch là chữ 's'
  // console.log(currentLocation.city);
  const myApiKey = `7929f327fc4a780215bc2a5b14f3fe24`;
  const keyApi_currentday = `https://api.openweathermap.org/data/2.5/weather?q=${nameLocal}&appid=${myApiKey}&units=${unit}&lang=vi`;
  ///call API
  useEffect(() => {
    // ngay khi mới vào thì call luôn ở địa điểm người dung
    //còn khi nhập và ấn enter ở Input_search cx call
     apiFetch();
    setnameLocal("");
  }, []);

  let lat = undefined;
  let lon = undefined;

  const apiFetch = async () => {
    try {
      let response = await fetch(`${keyApi_currentday}`);
      let inforWeathers = await response.json(); //toàn bộ thông tin thời tiết ngày đang nhập xc n
      inforWeathers && setInforWeather(inforWeathers);
      lat = (await inforWeathers) && inforWeathers.coord.lat;
      lon = (await inforWeathers) && inforWeathers.coord.lon;
     lat && lon && getHourForecast(lat, lon);
      // thêm các địa chỉ chi nhập ở input vào local
      if (inforWeathers.name) {
        // nếu tồn tại tên thành phố khi call thì mới thêm vào local và lúc này nameLocal mới hoàn thành vì nó có sự kiện onchange

        const local = localStorage.getItem("locations")
          ? JSON.parse(localStorage.getItem("locations"))
          : [];
          handle_input(local,nameLocal)// sử lí dữ liệu khi nhập , giả sử như bị trùng tên khi nhập  chả hạn 
  
      }
    } catch (err) {
      // catches errors both in fetch and response.json
      console.log(`lỗi rồi`);
      // alert(err);
      alert('Có vẻ như tên địa điểm bạn nhập bị sai ')
    }
  };

  const getHourForecast = async (lat, lon) => {
    try {
      const hourForecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7929f327fc4a780215bc2a5b14f3fe24&units=${unit}&lang=vi`
      );
      const hourForecast = await hourForecastRes.json();
      hourForecast && setHourlyWeather(hourForecast);
    } catch {
      alert(
        "Oops! Something went wrong with the forecast. Please try again later."
      );
    }
  };
  const searchWeather = (e) => {
     lat && lon && apiFetch();
    setnameLocal("");
  };
  return (
    <S_Header>
      <S_headLogo className="headLogo">
        <Link to="/">
          <div className="imgLogo">
            <FaSun />
          </div>
          <div className="contentLogo">
            <p>THE FORECAST WEATHER</p>
          </div>
        </Link>
      </S_headLogo>
      <S_headSearch className="headSearch">
        <Input_search
          setnameLocal={setnameLocal}
          nameLocal={nameLocal}
          apiFetch={apiFetch}
          inforWeather={inforWeather}
          lat={lat}
          lon = {lon}
        />
        {/* search đia điểm , và các địa điểm sẽ đc lưu vào local */}
        <div className="headSearch_icon">
          <FaSearchLocation
            style={{ cursor: "pointer" }}
            onClick={searchWeather}
          />
        </div>
      </S_headSearch>
      {!checkLogin ? (
        <S_head_User className="head_User">
          <div className="signIn">
            <Link to="Login">SIGN IN</Link> {/* chỗ này để điền link */}
          </div>
          <div className="signUp">
            <Link to="Signup">SIGN UP</Link> {/* chỗ này để điền link */}
          </div>
        </S_head_User>
      ) : (
        <Header_withinLog user={user} setCheckLogin={setCheckLogin} />
      )}
    </S_Header>
  );
};

export default Header;
