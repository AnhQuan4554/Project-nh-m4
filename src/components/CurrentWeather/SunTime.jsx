import React from "react";
import styled from "styled-components";

import { BsSunriseFill, BsFillSunsetFill } from "react-icons/bs";

const SunTime = ({ sunriseTime, sunsetTime }) => {
  return (
    <S_Time>
      <div className="sun-time">
        <span className="icon">
          <BsSunriseFill />
        </span>
        {sunriseTime}
      </div>
      <div className="sun-time">
        <div className="icon">
          <BsFillSunsetFill />
        </div>
        {sunsetTime}
      </div>
    </S_Time>
  );
};

export default SunTime;

const S_Time = styled.div`
  margin-right: -16px;
  margin-top: 20px;
  display: flex;

  .sun-time {
    display: flex;
    align-items: center;
    margin-right: 16px;
  }

  .icon {
    margin-right: 6px;
    font-size: 25px;
    color: #febc11;
  }
`;
