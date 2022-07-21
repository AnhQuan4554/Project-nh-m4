import React from "react";

import BodySection from "../../components/BodySection";
import CurrentWeather from "../../components/CurrentWeather";
import HourlyForecast from "../../components/HourlyForecast";
import Currently_day from "../../Currently_day/Currently_day";

const Home = ({
  inforWeather,
  hourlyWeather,
  setHourlyWeather,
  UVIndex,
  setUVIndex,
}) => {
  return (
    <BodySection
      mainContent={[
        <Currently_day inforWeather={inforWeather} />,
        <CurrentWeather
          inforWeather={inforWeather}
          setHourlyWeather={setHourlyWeather}
          UVIndex={UVIndex}
          setUVIndex={setUVIndex}
        />,
        <HourlyForecast
          inforWeather={inforWeather}
          hourlyWeather={hourlyWeather}
          setHourlyWeather={setHourlyWeather}
        />,
      ]}
    />
  );
};

export default Home;
