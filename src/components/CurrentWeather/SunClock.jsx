import React, { memo, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

import { HiSun } from "react-icons/hi";

const SunClock = ({ sunrise, sunset }) => {

  // đổi từ string sang phút để tính toán
  const sunriseHour = Number(sunrise[0]);
  const sunriseMinute = Number(sunrise.slice(2));
  const sunsetHour = Number(sunset[0]);
  const sunsetMinute = Number(sunset.slice(2));
  const sunriseTime = sunriseHour * 60 + sunriseMinute;
  const sunsetTime = sunsetHour * 60 + sunsetMinute;

  // tính toán giờ hiện tại
  const nowTime = new Date();
  const nowHour = nowTime.getHours();
  const nowMinute = nowTime.getMinutes();
  const currentTime = nowHour * 60 + nowMinute;
  const now = (currentTime <= sunsetTime ? currentTime : sunsetTime) - sunriseTime;

  // console.log(now, "ở SunClock");

  const time = sunsetTime - sunriseTime;
  const anglePerMinute = 180 / time;
  const angle = now <= time ? anglePerMinute * now : 180;
  const cx = 50 * Math.cos((angle * Math.PI) / 180);
  const cy = Math.sqrt(50 * 50 - cx * cx);

  return (
    <S_SunClock angle={angle} cx={cx} cy={cy}>
      <div className="circle"></div>
      <div className="sun">
        <HiSun />
      </div>
    </S_SunClock>
  );
};

export default memo(SunClock);

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
