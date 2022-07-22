import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { GiHeavyRain } from "react-icons/gi";
import { CgInfinity } from "react-icons/cg";

const HourlyForecastCard = ({
  time,
  currentTime = false,
  temperature = <CgInfinity />,
  iconCode = "01d",
  weather,
  rainVolumne = <CgInfinity />,
}) => {
  // const temperature = 27;
  // const iconCode = "10d";
  // const weather = "nhiều mây";
  // const rainVolumne = 1.15;

  return (
    <S_HourlyForecastCard fontWeight={currentTime ? "700" : "400"}>
      <Link to="/hourly">
        <h3 className="time">{time}</h3>
        <p className="temperature">{temperature}&deg;</p>
        <figure className="icon-weather">
          <img
            src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
            title={weather}
          />
        </figure>
        <div className="rain-volumne">
          <GiHeavyRain style={{ color: "#6adef8", marginRight: "5px" }} />
          {rainVolumne}mm
        </div>
      </Link>
    </S_HourlyForecastCard>
  );
};

export default HourlyForecastCard;

const S_HourlyForecastCard = styled.li`
  width: calc(20% - 20px);
  border-right: 1px solid;
  font-weight: ${(props) => props.fontWeight} !important;
  text-align: center;
  border-image-source: linear-gradient(
    180deg,
    hsla(0, 0%, 87.1%, 0) 0,
    #dedede 25%,
    #dedede 70%,
    hsla(0, 0%, 87.1%, 0) 85%,
    hsla(0, 0%, 87.1%, 0)
  );
  border-image-slice: 1 100%;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .time {
    font-weight: ${(props) => props.fontWeight};
    margin-bottom: 14px;
  }

  .temperature {
    font-size: 36px;
  }

  .icon-weather {
    width: 60px;
    margin-top: 6px;
    margin-bottom: 6px;
  }

  .icon-weather img {
    width: 100%;
  }

  .rain-volumne {
    font-size: 17px;
    display: flex;
    align-items: center;
  }
`;
