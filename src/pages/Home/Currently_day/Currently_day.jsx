import React from "react";
import styled from "styled-components";
import { TbTemperatureCelsius } from "react-icons/tb";
import {
  S_headerCurrently,
  S_container,
  S_location,
  S_contentCurrently,
} from "./Currently_CSS";
const Currently_day = ({ inforWeather }) => {
  const temp =
    inforWeather &&
    inforWeather.main &&
    Number(inforWeather.main.temp).toFixed(0);
  const tempMin =
    inforWeather &&
    inforWeather.main &&
    Number(inforWeather.main.temp_min).toFixed(0);
  const tempMax =
    inforWeather &&
    inforWeather.main &&
    Number(inforWeather.main.temp_max).toFixed(0);
  const icon =
    inforWeather && inforWeather.main && inforWeather.weather[0].icon;

  // nếu không có dữ liệu thì return về cái kahcs
  if (!temp && !tempMin && !tempMax && !icon) return <h1>NO DATA</h1>;
  return (
    <S_container>
      <S_headerCurrently className="headerCurrently">
        <S_location>
          <span className="location_name">
            {inforWeather && inforWeather.name}
          </span>
          <div className="curently_hour">Kể từ 10 giờ </div>
          {/* dùng gethour */}
        </S_location>

        <S_contentCurrently>
          <div className="content_dedicate">
            <div className="tempCurrently">
              <h1> {inforWeather && temp}</h1>
              {/* call API */}
              <TbTemperatureCelsius
                style={{ fontSize: "40px", color: "yellow" }}
              />
            </div>
            <div className="content_bonus">
              {/* <p className="dateCurrently">Nhiệt độ của ngày </p> */}
              <p className="tempMin">
                Nhiệt độ thấp nhất
                <span>
                  {" "}
                  {inforWeather && tempMin}{" "}
                  <TbTemperatureCelsius style={{ color: "#fff" }} />{" "}
                </span>
              </p>
              <p className="tempMax">
                Nhiệt độ cao nhất{" "}
                <span>
                  {" "}
                  {inforWeather && tempMax}
                  <TbTemperatureCelsius style={{ color: "red" }} />
                </span>
              </p>
            </div>
          </div>
          <div className="header_img">
            {/* thay nguồn API sau  */}
            <img
              src={
                inforWeather && `http://openweathermap.org/img/wn/${icon}.png`
              }
              alt=""
            />
          </div>
        </S_contentCurrently>
      </S_headerCurrently>
    </S_container>
  );
};

export default Currently_day;
