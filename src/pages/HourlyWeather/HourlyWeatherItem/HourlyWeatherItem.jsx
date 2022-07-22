import React, { useState } from "react";
import styled from "styled-components";

import { CgInfinity } from "react-icons/cg";

import HourlyWeatherItemDetails from "../HourlyWeatherDetail/HourlyWeatherItemDetails";
import HourlyWeatherItemSummary from "./HourlyWeatherItemSummary";

const HourlyWeatherItem = ({
  time,
  temperature = <CgInfinity />,
  iconCode = "01d",
  weather,
  rainVolumne = <CgInfinity />,
  windSpeed = <CgInfinity />,
  temperatureFeel = <CgInfinity />,
  humidity = <CgInfinity />,
  visibility = <CgInfinity />,
  cloud = <CgInfinity />,
}) => {
  const [show, setShow] = useState(false);

  return (
    <S_HourlyWeatherItem>
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
      {show && (
        <HourlyWeatherItemDetails
          temperatureFeel={temperatureFeel}
          wind={windSpeed}
          humidity={humidity}
          visibility={visibility}
          rainVolumne={rainVolumne}
          cloud={cloud}
        />
      )}
    </S_HourlyWeatherItem>
  );
};

export default HourlyWeatherItem;

const S_HourlyWeatherItem = styled.li`
  border-top: 1px solid #dedede;
`;
