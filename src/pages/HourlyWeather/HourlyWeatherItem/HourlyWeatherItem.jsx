import React, { useState } from "react";
import styled from "styled-components";

import HourlyWeatherItemDetails from "../HourlyWeatherDetail/HourlyWeatherItemDetails";
import HourlyWeatherItemSummary from "./HourlyWeatherItemSummary";

const HourlyWeatherItem = ({
  time,
  temperature,
  iconCode,
  weather,
  rainVolumne,
  windSpeed,
  keyValue,
}) => {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <S_HourlyWeatherItem key={keyValue}>
      <HourlyWeatherItemSummary
        time={time}
        temperature={temperature}
        iconCode={iconCode}
        weather={weather}
        rainVolumne={rainVolumne}
        windSpeed={windSpeed}
        setShow={setShow}
        isShow={show}
      />
      {show && <HourlyWeatherItemDetails />}
    </S_HourlyWeatherItem>
  );
};

export default HourlyWeatherItem;

const S_HourlyWeatherItem = styled.li`
  border-top: 1px solid #dedede;
`;
