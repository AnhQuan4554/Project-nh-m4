import React from "react";
import styled from "styled-components";

import { HiSun } from "react-icons/hi";

const SunClock = ({ sunrise, sunset, currentTime }) => {
  const time = sunset - sunrise;
  const anglePerMinute = 180 / time;
  const now = (currentTime <= sunset ? currentTime : sunset) - sunrise;
  const angle = anglePerMinute * now;
  const cx = 50 * Math.cos((angle * Math.PI) / 180);
  const cy = Math.sqrt(50 * 50 - cx * cx);

  console.log(currentTime + "cT ");

  return (
    <S_SunClock angle={angle} cx={cx} cy={cy}>
      <div className="circle"></div>
      <div className="sun">
        <HiSun />
      </div>
    </S_SunClock>
  );
};

export default SunClock;

const S_SunClock = styled.div`
  position: relative;

  .circle {
    width: 100px;
    height: 50px;
    border-top-left-radius: 54px;
    border-top-right-radius: 54px;
    border: 4px solid #e87538;
    border-bottom: none;
  }

  .sun {
    width: 24px;
    height: 24px;
    font-size: 24px;
    color: #febc11;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: calc(${(props) => props.cy}px - 14px);
    left: calc(50px - ${(props) => props.cx}px - 10px);
    transform: rotate(${(props) => props.angle}deg);
  }
`;
