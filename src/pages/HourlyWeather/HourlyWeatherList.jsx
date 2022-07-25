import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CgInfinity } from "react-icons/cg";

import HourlyWeatherItem from "./HourlyWeatherItem/HourlyWeatherItem";

const HourlyWeatherList = ({ time, listInfo }) => {
  console.log(listInfo, "ở hour list");

  return (
    <S_HourlyWeatherList>
      <h2 className="day">{`${time.day}, ngày ${time.date} tháng ${time.month}`}</h2>
      {listInfo &&
        listInfo.map((info, index) => {
          const time = new Date(info["dt_txt"]).getHours();
          return (
            <HourlyWeatherItem
              time={`${time}:00`}
              temperature={Math.round(Number(info.main.temp))}
              iconCode={info.weather[0].icon}
              weather={info.weather[0].description}
              rainVolumne={info.rain && info.rain["3h"]}
              windSpeed={(Number(info.wind.speed) * 3.6).toFixed(1)}
              temperatureFeel={Math.round(Number(info.main["feels_like"]))}
              humidity={info.main.humidity}
              cloud={info.clouds.all}
              visibility={(Number(info.visibility) / 1000).toFixed(1)}
              key={index}
              index={index}
            />
          );
        })}
    </S_HourlyWeatherList>
  );
};

export default HourlyWeatherList;

const S_HourlyWeatherList = styled.ul`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #dedede;

  .day {
    padding: 10px 26px;
    border-top: 1px solid #dedede;
  }
`;
