import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HourlyForecastCard from "./HourlyForecastCard";
import Button from "../Button";

const HourlyForecast = ({
  inforWeather,
  hourlyWeather,
  setHourlyWeather,
  unit = "metric",
}) => {
  console.log(hourlyWeather, "o hourly weather");

  const [weatherList, setWeatherList] = useState([]);
  // Lấy thời gian hiện tại
  const now = new Date();
  const nowHour = now.getHours();
  const nowDate = now.getDate();

  // const nowHour = 15;

  // Lấy tọa độ địa điểm

  // Call API 3 giờ
  const lat = inforWeather && inforWeather.coord && inforWeather.coord.lat;
  const lon = inforWeather && inforWeather.coord && inforWeather.coord.lon;

  const getHourForecast = async () => {
    try {
      const hourForecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7929f327fc4a780215bc2a5b14f3fe24&units=${unit}&lang=vi`
      );
      const hourForecast = await hourForecastRes.json();
      setHourlyWeather(hourForecast);
      console.log(hourForecast);
    } catch {
      alert(
        "Oops! Something went wrong with the forecast. Please try again later."
      );
    }
  };

  // Xử lý dữ liệu
  const handlerForecastData = () => {
    let indexOfWeather = 0;
    for (let i = 0; i < hourlyWeather.list.length; i++) {
      const temp = new Date(hourlyWeather.list[i]["dt_txt"]);
      console.log(temp.getHours(), temp.getDate(), "hehe temp ne");
      if (weatherList.length <= 5 && temp.getDate() == nowDate) {
        if (temp.getHours() > nowHour) {
          indexOfWeather = i - 1;
          console.log(hourlyWeather.list[i], "kẻ khờ mù quáng");
          break;
        }
      }
    }
    console.log("có vô đây nhá", indexOfWeather);
    const temppppp = [];
    for (let i = indexOfWeather; i < indexOfWeather + 5; i++) {
      temppppp.push(hourlyWeather.list[i]);
    }
    setWeatherList(temppppp);
  };

  useEffect(() => {
    // getHourForecast();
    console.log("heheheh", lat, lon);
    hourlyWeather && handlerForecastData();
    console.log(weatherList, "weatherList");
  }, [hourlyWeather]);

  return (
    <S_HourlyForecast key="HourlyForecast">
      <h2 className="title">Dự báo mỗi 3 giờ</h2>
      <ul className="card-list">
        {weatherList &&
          weatherList.map((card, index) => {
            const time = new Date(card.dt_txt).getHours();
            return (
              <HourlyForecastCard
                key={index}
                currentTime={index === 0 ? true : false}
                temperature={Math.round(Number(card.main.temp))}
                time={index === 0 ? "Bây giờ" : `${time}:00`}
                iconCode={card.weather[0].icon}
                weather={card.weather[0].description}
                rainVolumne={card.rain && card.rain["3h"]}
              />
            );
          })}
      </ul>
      <Link to="/hourly">
        <Button text="48 Giờ tới" />
      </Link>
    </S_HourlyForecast>
  );
};

export default HourlyForecast;

const S_HourlyForecast = styled.section`
  margin-top: 14px;
  width: 100%;
  padding: 16px 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);

  .title {
    margin-left: 12px;
    margin-bottom: 25px;
  }

  .card-list {
    display: flex;
    justify-content: space-around;
  }

  .card-list li:nth-child(5) {
    border: none;
  }

  button {
    margin-left: 20px;
    margin-top: 35px;
  }
`;
