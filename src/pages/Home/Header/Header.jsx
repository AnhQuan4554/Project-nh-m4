import React, { useState, useEffect, createContext, useRef } from "react";
import styled from "styled-components";
import { FaSun } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//link css
import { S_Header, S_headLogo, S_headSearch, S_head_User } from "./Header_CSS";
import Input_search from "./Input_search";

const Header = ({
  inforWeather,
  setInforWeather,
  currentLocation,
  setHourlyWeather,
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

  let lat = 0;
  let lon = 0;

  //     useEffect(()=>{
  //       if(nameLocal){
  //           apiFetch();
  //       }
  // },[nameLocal])
  const apiFetch = async () => {
    try {
      let response = await fetch(`${keyApi_currentday}`);
      let inforWeathers = await response.json(); //toàn bộ thông tin thời tiết ngày đang nhập xc n
      inforWeathers && setInforWeather(inforWeathers);
      lat = (await inforWeathers) && inforWeathers.coord.lat;
      lon = (await inforWeathers) && inforWeathers.coord.lon;
      getHourForecast(lat, lon);
      // thêm các địa chỉ chi nhập ở input vào local
      if (inforWeathers.name) {
        // nếu tồn tại tên thành phố khi call thì mới thêm vào local và lúc này nameLocal mới hoàn thành vì nó có sự kiện onchange

        const local = localStorage.getItem("locations")
          ? JSON.parse(localStorage.getItem("locations"))
          : [];
        const localExists = local.find((item) => item === nameLocal); //kiểm tra xem trong bảng gợi ý tồn tại tên thành phố chưa

        if (localExists) {
          //nếu có phần tử bị trùng
          const localSHow = local.filter((iteam) => iteam != localExists); //nếu tồn tại thì xóa cái tồn tại đi  rồi đưa cái mới vào cuối mảng vì ở bên inputSuggeest duyệt từ đầu đến cuối
          if (localSHow.length > 4) {
            localSHow.shift();
          }
          localStorage.setItem(
            "locations",
            JSON.stringify([...localSHow, nameLocal])
          );
        } else {
          //nếu không có phần tử bị trùng

          if (local.length > 4) {
            local.shift();
          }
          localStorage.setItem(
            "locations",
            JSON.stringify([...local, nameLocal])
          );
        }
      }
    } catch (err) {
      // catches errors both in fetch and response.json
      console.log(`lỗi rồi`);
      alert(err);
    }
  };

  const getHourForecast = async (lat, lon) => {
    try {
      const hourForecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7929f327fc4a780215bc2a5b14f3fe24&units=${unit}&lang=vi`
      );
      const hourForecast = await hourForecastRes.json();
      setHourlyWeather(hourForecast);
    } catch {
      alert(
        "Oops! Something went wrong with the forecast. Please try again later."
      );
    }
  };

  return (
    <S_Header>
      <S_headLogo className="headLogo">
        <Link to="/">
          <div className="imgLogo">
            <FaSun />
          </div>
        </Link>
        <div className="contentLogo">
          <p>THE FORECAST WEATHER</p>
        </div>
      </S_headLogo>
      <S_headSearch className="headSearch">
        <Input_search
          setnameLocal={setnameLocal}
          nameLocal={nameLocal}
          apiFetch={apiFetch}
          inforWeather={inforWeather}
        />
        {/* search đia điểm , và các địa điểm sẽ đc lưu vào local */}
        <div className="headSearch_icon">
          <FaSearchLocation />
        </div>
      </S_headSearch>
      <S_head_User className="head_User">
        <div className="signIn">
          <Link to="Login">SIGN IN</Link> {/* chỗ này để điền link */}
        </div>
        <div className="signUp">
          <Link to="Signup">SIGN UP</Link> {/* chỗ này để điền link */}
        </div>
      </S_head_User>
    </S_Header>
  );
};

export default Header;
