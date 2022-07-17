import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HourlyForecastCard from "./HourlyForecastCard";
import Button from "../Button";

const HourlyForecast = () => {
  return (
    <S_HourlyForecast key="HourlyForecast">
      <h2 className="title">Dự báo mỗi 3 giờ</h2>
      <ul className="card-list">
        <HourlyForecastCard time="Bây giờ" currentTime={true} />
        <HourlyForecastCard time="23:00" />
        <HourlyForecastCard time="00:00" />
        <HourlyForecastCard time="1:00" />
        <HourlyForecastCard time="2:00" />
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
