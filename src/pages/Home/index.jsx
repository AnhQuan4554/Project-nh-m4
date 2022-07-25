import React from "react";

import BodySection from "../../components/BodySection";
import CurrentWeather from "../../components/CurrentWeather";
import HourlyForecast from "../../components/HourlyForecast";
import AddToDo from "../addTodo";
import Planned from "../planned";
import Currently_day from "./Currently_day/Currently_day";
import Header from "./Header/Header";
import Nav from "./Header/Nav";

const Home = ({
  inforWeather,
  currentLocation,
  setInforWeather,
  hourlyWeather,
  checkLogin,
}) => {
  return (
    <>
      <BodySection
        /* nếu đăng nhập thì mảng có 2 phần tử nếu ko chỉ có 1  */

        mainContent={
          checkLogin
            ? [
                <Currently_day inforWeather={inforWeather} />,
                <CurrentWeather inforWeather={inforWeather} />,
                <HourlyForecast hourlyWeather={hourlyWeather} />,
              ]
            : [
                <Currently_day inforWeather={inforWeather} />,
                <CurrentWeather inforWeather={inforWeather} />,
              ]
        }
        rightContent={[<AddToDo />, <Planned />]} // bao giờ cho lịch vào cái này
      />
    </>
  );
};

export default Home;
