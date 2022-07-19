import React from "react";
import styled from "styled-components";

import HourlyWeatherItem from "./HourlyWeatherItem/HourlyWeatherItem";

const HourlyWeatherList = ({ today }) => {
  return (
    <S_HourlyWeatherList>
      <h2 className="day">{today}</h2>
      <HourlyWeatherItem
        time="17:00"
        temperature="28&deg;"
        iconCode="04d"
        weather="Nhiều mây"
        rainVolumne="1.15"
        windSpeed="14"
        keyValue={1}
      />
      <HourlyWeatherItem
        time="17:00"
        temperature="28&deg;"
        iconCode="04d"
        weather="Nhiều mây"
        rainVolumne="1.15"
        windSpeed="14"
        keyValue={2}
      />
      <HourlyWeatherItem
        time="17:00"
        temperature="28&deg;"
        iconCode="04d"
        weather="Nhiều mây"
        rainVolumne="1.15"
        windSpeed="14"
        keyValue={3}
      />
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
