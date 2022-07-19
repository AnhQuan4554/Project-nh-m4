import React from "react";
import styled from "styled-components";

const HourlyWeatherDetail = ({ iconComp, label, content }) => {
  return (
    <S_HourlyWeatherDetail>
      <div className="icon">{iconComp}</div>
      <div className="info">
        <p>{label}</p>
        <h4>{content}</h4>
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
`;
