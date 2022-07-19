import React from "react";
import styled from "styled-components";

import BodySection from "../../components/BodySection";
import HourlyWeatherFooter from "./Footer";
import HourlyWeatherHeader from "./HourlyWeatherHeader";
import HourlyWeatherList from "./HourlyWeatherList";

const HourlyWeather = () => {
  return (
      <BodySection
        mainContent={[
          <HourlyWeatherHeader
            currentLocation="Thành phố Hồ Chí Minh"
            accessTime={"16:05"}
          />,
          <HourlyWeatherList today="Thứ Sáu, 15 tháng 7" />,
          <HourlyWeatherFooter />,
        ]}
      />
  );
};

export default HourlyWeather;