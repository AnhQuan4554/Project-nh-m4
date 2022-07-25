import React, { useEffect, useState } from "react";
import styled from "styled-components";

import BodySection from "../../components/BodySection";
import HourlyWeatherFooter from "./Footer";
import HourlyWeatherHeader from "./HourlyWeatherHeader";
import HourlyWeatherList from "./HourlyWeatherList";

const HourlyWeather = ({ inforWeather, hourlyWeather,checkLogin }) => {
  const [uvIndex, setUvIndex] = useState(null);
  const [listInfo, setListInfo] = useState([]);

  const lat = inforWeather && inforWeather.coord && inforWeather.coord.lat;
  const lon = inforWeather && inforWeather.coord && inforWeather.coord.lon;

  console.log(hourlyWeather, "ở HourlyWeather");
  console.log(inforWeather, "inforWeather ở HourlyWeather");
  const date = new Date();
  const today = {
    day: date.getDay(),
    date: date.getDate(),
    month: date.getMonth() + 1,
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
  console.log(today, "today ở HourlyWeather");

  const time = {
    day: "",
    date: today.date,
    month: today.month,
  };

  const handleTime = () => {
    switch (today.day) {
      case 0:
        time.day = "Chủ nhật";
        break;
      case 1:
        time.day = "Thứ hai";
        break;
      case 2:
        time.day = "Thứ ba";
        break;
      case 3:
        time.day = "Thứ tư";
        break;
      case 4:
        time.day = "Thú năm";
        break;
      case 5:
        time.day = "Thứ sáu";
        break;
      case 6:
        time.day = "Thứ bảy";
        break;
    }
  };

  handleTime();

  useEffect(() => {
    // uvHandler();
    hourlyWeather && handlerForecastData();
  }, [lat, lon, hourlyWeather]);

  const uvHandler = async () => {
    try {
      const uvRes = await fetch(
        `http://api.weatherstack.com/current?access_key=957281ed3799898a35f4317c80174954&units=m&query=${lat},${lon}`
      );
      const uvData = await uvRes.json();
      console.log(uvData, "uv data");
      setUvIndex(uvData && uvData.current ? uvData.current["uv_index"] : "--");
    } catch {
      alert("wrong api");
    }
  };

  const handlerForecastData = () => {
    let indexOfStartWeather = 0;
    let indexOfEndWeather = 0;
    console.log(today, "hahah to day");
    for (let i = 0; i < hourlyWeather.list.length; i++) {
      const temp = new Date(hourlyWeather.list[i]["dt_txt"]);
      if (temp.getDate() == today.date)
        if (temp.getHours() > today.hour) {
          indexOfStartWeather = i - 1;
          break;
        }
    }
    for (let i = 0; i < hourlyWeather.list.length; i++) {
      const temp = new Date(hourlyWeather.list[i]["dt_txt"]);
      if (temp.getDate() != today.date) {
        indexOfEndWeather = i;
        break;
      }
    }
    console.log("có vô đây nhas", indexOfStartWeather, indexOfEndWeather);
    const template = [];
    for (let i = indexOfStartWeather; i <= indexOfEndWeather; i++) {
      template.push(hourlyWeather.list[i]);
    }
    setListInfo(template);
  };

  return (
    <>
    {checkLogin ?    <BodySection
      mainContent={[
        <HourlyWeatherHeader
          currentLocation={inforWeather && inforWeather.name}
          accessTime={`${today.hour}:${today.minute}`}
        />,
        <HourlyWeatherList UVIndex={uvIndex} listInfo={listInfo} time={time} />,
        <HourlyWeatherFooter />,
      ]}
    /> :<ContentSugget>Bạn cần đăng nhập để xem thêm thông tin chi tiết</ContentSugget> }
 
    </>
  );
};

export default HourlyWeather;
const ContentSugget =styled.h1`
    margin-top: 150px;
    text-align: center;
`