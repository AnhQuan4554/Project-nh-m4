import React from "react";
import styled from "styled-components";

const HourlyWeatherHeader = ({ currentLocation, accessTime }) => {
  return (
    <S_HourlyWeatherHeader>
      <div className="title">
        <h2 className="label">Thời tiết hàng giờ</h2>
        <p className="location"> - {currentLocation}</p>
      </div>
      <div className="time">Kể từ {accessTime}</div>
    </S_HourlyWeatherHeader>
  );
};

export default HourlyWeatherHeader;

const S_HourlyWeatherHeader = styled.div`
  padding: 16px 26px;
  background-color: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  .title {
    margin-bottom: 6px;
    display: flex;
    align-items: baseline;
  }

  .label {
    margin-right: 6px;
  }

  .time {
    margin-bottom: 26px;
  }
`;
