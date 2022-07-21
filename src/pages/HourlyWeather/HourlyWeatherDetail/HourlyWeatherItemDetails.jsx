import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FaTemperatureHigh } from "react-icons/fa";
import { TbWind } from "react-icons/tb";
import { MdWaterDrop, MdVisibility } from "react-icons/md";
import { GiHeavyRain } from "react-icons/gi";
import { FaCloud } from "react-icons/fa";

import HourlyWeatherDetail from "./HourlyWeatherDetail";

const HourlyWeatherItemDetails = ({
  temperatureFeel,
  wind,
  humidity,
  visibility,
  rainVolumne,
  cloud,
}) => {
  return (
    <S_HourlyWeatherItemDetails>
      <div className="top__content">
        <HourlyWeatherDetail
          iconComp={<FaTemperatureHigh />}
          label="Cảm giác như"
          content={temperatureFeel}
          iconHTML="&deg;"
        />
        <HourlyWeatherDetail
          iconComp={<TbWind />}
          label="Gió"
          content={wind}
          iconHTML="km/giờ"
        />
        <HourlyWeatherDetail
          iconComp={<MdWaterDrop />}
          label="Độ ẩm"
          content={humidity}
          iconHTML="%"
        />
      </div>
      <div className="bottom__content">
        <HourlyWeatherDetail
          iconComp={<MdVisibility />}
          label="Tầm nhìn"
          content={visibility}
          iconHTML="km"
        />
        <HourlyWeatherDetail
          iconComp={<FaCloud />}
          label="Mây che phủ"
          content={cloud}
          iconHTML="%"
        />
        <HourlyWeatherDetail
          iconComp={<GiHeavyRain />}
          label="Lượng mưa"
          content={rainVolumne}
          iconHTML="mm"
        />
      </div>
    </S_HourlyWeatherItemDetails>
  );
};

export default HourlyWeatherItemDetails;

const S_HourlyWeatherItemDetails = styled.div`
  margin: 15px 26px;
  padding: 15px;
  margin-top: 5px;
  border: 1px solid #dedede;
  border-radius: 6px;

  .top__content {
    padding-bottom: 14px;
    border-bottom: 1px solid #dedede;
    display: flex;
  }

  .bottom__content {
    display: flex;
    padding-top: 14px;
  }
`;
