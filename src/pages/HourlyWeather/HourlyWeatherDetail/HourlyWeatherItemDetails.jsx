import React from "react";
import styled from "styled-components";

import { FaTemperatureHigh } from "react-icons/fa";
import { TbWind } from "react-icons/tb";
import { MdWaterDrop } from "react-icons/md";
import { GiSunbeams, GiHeavyRain } from "react-icons/gi";
import { FaCloud } from "react-icons/fa";

import HourlyWeatherDetail from "./HourlyWeatherDetail";

const HourlyWeatherItemDetails = () => {
  return (
    <S_HourlyWeatherItemDetails>
      <div className="top__content">
        <HourlyWeatherDetail
          iconComp={<FaTemperatureHigh />}
          label="Cảm giác như"
          content="35&deg;"
        />
        <HourlyWeatherDetail
          iconComp={<TbWind />}
          label="Gió"
          content="14 km/giờ"
        />
        <HourlyWeatherDetail
          iconComp={<MdWaterDrop />}
          label="Độ ẩm"
          content="85%"
        />
      </div>
      <div className="bottom__content">
        <HourlyWeatherDetail
          iconComp={<GiSunbeams />}
          label="Chỉ số UV"
          content="1 / 10"
        />
        <HourlyWeatherDetail
          iconComp={<FaCloud />}
          label="Mây che phủ"
          content="51%"
        />
        <HourlyWeatherDetail
          iconComp={<GiHeavyRain />}
          label="Lượng mưa"
          content="1.15mm"
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
