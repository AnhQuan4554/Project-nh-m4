import React from "react";

import BodySection from "../../components/BodySection";
import CurrentWeather from "../../components/CurrentWeather";
import HourlyForecast from "../../components/HourlyForecast";
import Currently_day from "../../Currently_day/Currently_day";

const Home = ({ inforWeather }) => {
  return (
    <BodySection
      mainContent={[
        <Currently_day inforWeather={inforWeather} />,
        <CurrentWeather inforWeather={inforWeather} />,
        <HourlyForecast inforWeather={inforWeather} />,
      ]}
    />
  );
};

export default Home;
