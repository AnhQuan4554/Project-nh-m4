import React from "react";
import styled from "styled-components";

import WeatherDetail from "./WeatherDetail";
import SunClock from "./SunClock";
import SunTime from "./SunTime";

import { GiSunbeams, GiWindSlap } from "react-icons/gi";
import { FaMonument, FaTemperatureHigh } from "react-icons/fa";
import { MdWaterDrop, MdCompress, MdVisibility } from "react-icons/md";
import { TbWind } from "react-icons/tb";
import moment from "moment"; // thư viện đổi giờ sunrise sunset

const CurrentWeather = ({ inforWeather }) => {
  const location = inforWeather && inforWeather.name && inforWeather.name;
  const temperature =
    inforWeather && inforWeather.main && inforWeather.main.temp;
  // Number(inforWeather.main.temp - 280).toFixed(1);

  const sunriseTime =
    inforWeather && inforWeather.sys && inforWeather.sys.sunrise;

  const sunsetTime =
    inforWeather &&
    inforWeather.sys &&
    moment(inforWeather.sys.sunset).format("LT");

  const nowTime = new Date();
  const nowHour = nowTime.getHours();
  const nowMinute = nowTime.getMinutes();
  const currentTime = nowHour * 60 + nowMinute;

  return (
    <S_CurrentWeather>
      <h2 className="today-weather__title">Thời tiết hôm nay tại {location}</h2>
      <div className="today-weather__header">
        <div className="today-weather__temp">
          <p>Cảm giác như</p>
          <p>{temperature}&deg;</p>
        </div>
        <div className="today-weather__suntime">
          <SunClock
            sunrise={360}
            sunset={1080}
            currentTime={currentTime}
          />
          <SunTime sunriseTime={sunriseTime} sunsetTime={sunsetTime} />
        </div>
      </div>
      <ul className="today-weather__details">
        <WeatherDetail
          iconComp={<FaTemperatureHigh />}
          label="Cao/Thấp"
          info="--/24&deg;"
        />
        <WeatherDetail iconComp={<MdWaterDrop />} label="Độ ẩm" info="75%" />
        <WeatherDetail
          iconComp={<MdCompress />}
          label="Áp suất"
          info="1001.0mb"
        />
        <WeatherDetail
          iconComp={<MdVisibility />}
          label="Tầm nhìn"
          info="9.66km"
        />
        <WeatherDetail iconComp={<TbWind />} label="Gió" info="23km/giờ" />
        <WeatherDetail
          iconComp={<GiSunbeams />}
          label="Chỉ số UV"
          info="1 / 10"
        />
        <WeatherDetail
          iconComp={<GiWindSlap />}
          label="Chỉ số chất lượng không khí"
          info="55"
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
