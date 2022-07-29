import React from "react";
import styled from "styled-components";

const HourlyWeatherDetail = ({
  iconComp,
  label,
  content,
  iconHTML = "",
}) => {
  return (
    <S_HourlyWeatherDetail>
      <div className="icon">{iconComp}</div>
      <div className="info">
        <p>{label}</p>
        <p>
          {content}
          {iconHTML}
        </p>
      </div>
    </S_HourlyWeatherDetail>
  );
};

export default HourlyWeatherDetail;

const S_HourlyWeatherDetail = styled.span`
  display: flex;
  flex: 1;

  .icon {
    color: #1b4de4;
  }

  .info {
    margin-left: 8px;
  }

  .info p {
    font-size: 15px;
    margin-bottom: 5px;
  }

  p {
    display: flex;
    align-items: center;
  }
`;
