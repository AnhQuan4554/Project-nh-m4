import React from "react";

import BodySection from "../../components/BodySection";
import CurrentWeather from "../../components/CurrentWeather";
import HourlyForecast from "../../components/HourlyForecast";

const Home = () => {
  return (
    <BodySection
      mainContent={[<CurrentWeather />, <HourlyForecast />]}
    />
  );
};

export default Home;
