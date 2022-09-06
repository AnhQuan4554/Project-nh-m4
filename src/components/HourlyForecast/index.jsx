import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HourlyForecastCard from "./HourlyForecastCard";
import Button from "../Button";

const HourlyForecast = ({ hourlyWeather }) => {
  console.log(hourlyWeather, "o hourly weather");

  const [weatherList, setWeatherList] = useState([]);
  // Lấy thời gian hiện tại
  const now = new Date();
  const nowHour = now.getHours();
  const nowDate = now.getDate();


  // Xử lý dữ liệu
  const handlerForecastData = () => {
    let indexOfWeather = 0;
    for (let i = 0; i < hourlyWeather.list.length; i++) {
      const temp = new Date(hourlyWeather.list[i]["dt_txt"]);
      if (temp.getDate() == nowDate) {
        if (temp.getHours() > nowHour) {
          indexOfWeather = i - 1;
          break;
        }
      }
    }
    // console.log("có vô đây nhá", indexOfWeather);
    const tempArr = [];
    for (let i = indexOfWeather; i < indexOfWeather + 5; i++) {
      tempArr.push(hourlyWeather.list[i]);
    }
    setWeatherList(tempArr);
  };

  useEffect(() => {
    // getHourForecast();
    // console.log("heheheh", lat, lon);
    hourlyWeather && handlerForecastData();
    console.log(weatherList, "weatherList");
  }, [hourlyWeather]);
  console.log(weatherList, "weatherList");

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
      <Link to="/HourlyForecast">
        <Button text="Những giờ tới" />
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
