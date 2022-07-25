import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment"; // thư viện đổi giờ sunrise sunset

import WeatherDetail from "./WeatherDetail";
import SunClock from "./SunClock";
import SunTime from "./SunTime";

import { GiSunbeams } from "react-icons/gi";
import { FaMonument, FaTemperatureHigh } from "react-icons/fa";
import { MdWaterDrop, MdCompress, MdVisibility } from "react-icons/md";
import { TbWind } from "react-icons/tb";

const CurrentWeather = ({ inforWeather }) => {
  const location = inforWeather && inforWeather.name ? inforWeather.name : "--";

  // Temperature
  const temperature =
    inforWeather && inforWeather.main && inforWeather.main["feels_like"]
      ? Math.round(Number(inforWeather.main.temp))  // cho đồng nhất với cả header
      : "--";
  const temperatureMin =
    inforWeather && inforWeather.main && inforWeather.main["temp_min"]
      ? Math.round(Number(inforWeather.main["temp_min"]))
      : "--";
  const temperatureMax =
    inforWeather &&
    inforWeather.main &&
    temperatureMin !== Math.round(Number(inforWeather.main["temp_max"]))
      ? Math.round(Number(inforWeather.main["temp_max"]))
      : "--";

  // Sun
  const sunriseTime =
    inforWeather &&
    inforWeather.sys &&
    moment.unix(inforWeather.sys.sunrise).format("H:mm");

  const sunsetTime =
    inforWeather &&
    inforWeather.sys &&
    moment.unix(inforWeather.sys.sunset).format("H:mm");
  // moment(inforWeather.sys.sunset).format("LT");

  // Lấy giờ hiện tại để chạy cái mặt trời

  // áp suất
  const pressure =
    inforWeather && inforWeather.main && inforWeather.main.pressure
      ? inforWeather.main.pressure
      : "--";

  // độ ẩm
  const humidity =
    inforWeather && inforWeather.main && inforWeather.main.humidity
      ? inforWeather.main.humidity
      : "--";

  // tầm nhìn
  const visibility =
    inforWeather && inforWeather.visibility
      ? Number(inforWeather.visibility) / 1000
      : "--";

  // gió
  const wind =
    inforWeather && inforWeather.wind && inforWeather.wind.speed
      ? Number(inforWeather.wind.speed * 3.6).toFixed(1)
      : "--";

  // Chỉ số UV
  const lat = inforWeather && inforWeather.coord && inforWeather.coord.lat;
  const lon = inforWeather && inforWeather.coord && inforWeather.coord.lon;
  const [uvIndex, setUvIndex] = useState(null);
  const [textColor, setTextColor] = useState("");

  const uvHandler = async () => {
    try {
      const uvRes = await fetch(
        `http://api.weatherstack.com/current?access_key=63310d5929808f55138cbf3097b97af2&units=m&query=${lat},${lon}`
      );
      const uvData = await uvRes.json();
      console.log(uvData, "uv data");
      setUvIndex(uvData && uvData.current ? uvData.current["uv_index"] : "--");
    } catch {
      alert("wrong api");
    }
  };

  useEffect(() => {
    if (uvIndex < 3) setTextColor("#03e45f");
    else if (uvIndex < 6) setTextColor("#fffe35");
    else if (uvIndex < 8) setTextColor("#ff7e15");
    else if (uvIndex < 11) setTextColor("#fe1f02");
    else setTextColor("#9e7ad2");
  }, [uvIndex]);

  useEffect(() => {
    uvHandler();
  }, [lat, lon]);

  return (
    <S_CurrentWeather>
      <h2 className="today-weather__title">Thời tiết hôm nay tại {location}</h2>
      <div className="today-weather__header">
        <div className="today-weather__temp">
          <p>Cảm giác như</p>
          <p>{temperature}&deg;</p>
        </div>
        <div className="today-weather__suntime">
          <SunClock sunrise={sunriseTime} sunset={sunsetTime} />
          <SunTime sunriseTime={sunriseTime} sunsetTime={sunsetTime} />
        </div>
      </div>
      <ul className="today-weather__details">
        <WeatherDetail
          iconComp={<FaTemperatureHigh />}
          label="Cao/Thấp"
          info={`${temperatureMax}/${temperatureMin}`}
          iconHTML="&deg;"
        />
        <WeatherDetail
          iconComp={<MdWaterDrop />}
          label="Độ ẩm"
          info={`${humidity}%`}
        />
        <WeatherDetail
          iconComp={<MdCompress />}
          label="Áp suất"
          info={`${pressure} mb`}
        />
        <WeatherDetail
          iconComp={<MdVisibility />}
          label="Tầm nhìn"
          info={`${visibility} km`}
        />
        <WeatherDetail
          iconComp={<TbWind />}
          label="Gió"
          info={`${wind} km/giờ`}
        />
        <WeatherDetail
          iconComp={<GiSunbeams />}
          label="Chỉ số UV"
          info={uvIndex <= 11 ? uvIndex : `${uvIndex}+`}
          color={textColor}
        />
      </ul>
    </S_CurrentWeather>
  );
};

export default CurrentWeather;

const S_CurrentWeather = styled.section`
  margin-top: 14px;
  width: 100%;
  padding: 16px 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  .today-weather__title {
    margin-left: 12px;
    margin-bottom: 25px;
  }

  .today-weather__header {
    display: flex;
    margin: 0 30px 25px;
  }

  .today-weather__temp {
    flex: 1;
  }

  .today-weather__temp p:nth-child(2) {
    margin-top: 7px;
    margin-left: 8px;
    font-size: 50px;
    font-weight: 600;
  }

  .today-weather__suntime {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .today-weather__details {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }
`;
