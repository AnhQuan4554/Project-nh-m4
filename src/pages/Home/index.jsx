import React from "react";

import AirQuality from "../../components/AirQuality";
import BodySection from "../../components/BodySection";
import CurrentWeather from "../../components/CurrentWeather";
import HourlyForecast from "../../components/HourlyForecast";

const Home = ({inforWeather}) => {
  return (
    <BodySection
      mainContent={[<CurrentWeather inforWeather={inforWeather} />, <HourlyForecast />]}
      rightContent={[<AirQuality />]} // bao giờ cho lịch vào cái này 
    />
  );
};

export default Home;
