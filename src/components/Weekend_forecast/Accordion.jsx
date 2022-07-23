import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Styled from "styled-components";
import { TbTemperatureCelsius } from "react-icons/tb";
import { BiWind } from "react-icons/bi";
import { GiHeavyRain } from "react-icons/gi";
import {
  WiDayCloudy,
  WiNightAltCloudy,
  WiDayRain,
  WiNightAltRain,
} from "react-icons/wi";
import { BsSun } from "react-icons/bs";
import { MdNightsStay } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [api, setApi] = useState("");
  useEffect(() => {
    fetchForecast();
  }, []);

  useEffect(() => {
    if (api) {
      console.log(api.list);
    }
  }, [api]);

  const fetchForecast = async () => {
    try {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&lang=vi&appid=7929f327fc4a780215bc2a5b14f3fe24"
      );
      const data = await res.json();
      setApi(data);
    } catch (error) {
      console.log(error);
    }
  };

  const dayOrNight = {
    d: <BsSun />,
    n: <MdNightsStay />,
  };

  const weatherIconDay = {
    Rain: <WiDayRain />,
    Clouds: <WiDayCloudy />,
  };

  const weatherIconNight = {
    Rain: <WiNightAltRain />,
    Clouds: <WiNightAltCloudy />,
  };
  function GetDates(startDate, daysToAdd) {
    var aryDates = [];

    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(
        DayAsString(currentDate.getDay()) +
          ", " +
          currentDate.getDate() +
          " " +
          MonthAsString(currentDate.getMonth()) +
          " " +
          currentDate.getFullYear()
      );
    }

    return aryDates;
  }

  function MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "Tháng 1";
    month[1] = "Tháng 2";
    month[2] = "Tháng 3";
    month[3] = "Tháng 4";
    month[4] = "Tháng 5";
    month[5] = "Tháng 6";
    month[6] = "Tháng 7 ";
    month[7] = "Tháng 8";
    month[8] = "Tháng 9";
    month[9] = "Tháng 10";
    month[10] = "Tháng 11";
    month[11] = "Tháng 12";

    return month[monthIndex];
  }

  function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Chủ nhật";
    weekdays[1] = "Thứ hai";
    weekdays[2] = "Thứ ba";
    weekdays[3] = "Thứ tư";
    weekdays[4] = "Thứ năm";
    weekdays[5] = "Thứ sáu";
    weekdays[6] = "Thứ bảy";

    return weekdays[dayIndex];
  }

  var startDate = new Date();
  var aryDates = GetDates(startDate, 7);
  console.log(aryDates[1]);
  const test = new Date(1658355952 * 1000).toTimeString().slice(0, 5);
  console.log("sunrise: " + test);

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <S_weatherBar>
            <div className="box">
              <div className="left-side">
                <div className="today">Hôm nay</div>{" "}
                <div className="temp">
                  <strong>
                    {api && Math.round(api.list[0].main.temp_max - 280)}
                    <TbTemperatureCelsius />
                  </strong>
                  /{api && Math.round(api.list[0].main.temp_min - 280)}
                  <TbTemperatureCelsius />
                </div>{" "}
                <div className="desc">
                  {/* {api && dayOrNight[api.list[0].sys.pod]} */}
                <div className="weather-image"><img src={`http://openweathermap.org/img/wn/${api && api.list[0].weather[0].icon}.png`} /></div>
                  {api && api.list[0].weather[0].description}
                </div>
                <div className="rain"><IoIosWater />
                {api && api.list[0].main.humidity}%</div>
             
              <div className="wind"><BiWind />
                {api && api.list[0].wind.speed}m/s</div>
                </div>
              <div className="right-side">
               
              </div>
            </div>
          </S_weatherBar>
        </AccordionSummary>
        <AccordionDetails>
          <S_weatherBar>
            <div className="detail-box">
              <div className="detail-left">
                <div className="detail-left-above">
                  <div className="day">
                    <h3>Ngày</h3>
                  </div>
                  <div className="temp-and-icon">
                    <span>
                      {api && Math.round(api.list[0].main.temp_max - 280)}
                      <TbTemperatureCelsius />
                    </span>
                    <span>
                      {weatherIconDay[api && api.list[0].weather[0].main]}
                    </span>
                  </div>
                </div>
                <div className="detail-right-below">
                  <div className="information-below">
                    <ul>
                      <li>
                        <IoIosWater />
                        Độ ẩm: {api && api.list[0].main.humidity}%
                      </li>
                      <li>
                        <FaCompressArrowsAlt />
                        Áp suất: {api && api.list[0].main.grnd_level}pHA
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <BsSunriseFill />
                        Bình minh:{" "}
                        {new Date((api && api.city.sunrise) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                      <li>
                        <BsSunsetFill />
                        Hoàng hôn:{" "}
                        {new Date((api && api.city.sunset) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="detail-right">
                <div className="detail-right-above">
                  <div className="night">
                    <h3>Đêm</h3>
                  </div>
                  <div className="temp-and-icon">
                    <span>
                      {api && Math.round(api.list[0].main.temp_min - 280)}
                      <TbTemperatureCelsius />
                    </span>
                    <span>
                      {weatherIconNight[api && api.list[0].weather[0].main]}
                    </span>
                  </div>
                </div>
                <div className="detail-right-below">
                  <div className="information-below">
                    <ul>
                      <li>
                        <IoIosWater />
                        Độ ẩm: {api && api.list[0].main.humidity}%
                      </li>
                      <li>
                        <FaCompressArrowsAlt />
                        Áp suất: {api && api.list[0].main.grnd_level}pHA
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <BsSunriseFill />
                        Tầm nhìn:{" "}
                        {api && api.list[0].visibility/1000}km
                      </li>
                      <li>
                      <BiWind />
                      Tóc độ gió:{' '}
                      {api && api.list[0].wind.speed}m/s
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </S_weatherBar>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <S_weatherBar>
            <div className="box">
              <div className="left-side">
                <div className="date">{aryDates[1]}</div>{" "}
                <div className="temp">
                  <strong>
                    {api && Math.round(api.list[5].main.temp_max - 280)}
                    <TbTemperatureCelsius />
                  </strong>
                  /{api && Math.round(api.list[5].main.temp_min - 280)}
                  <TbTemperatureCelsius />
                </div>{" "}
                <div className="desc">
                <div className="weather-image"><img src={`http://openweathermap.org/img/wn/${api && api.list[5].weather[0].icon}.png`} /></div>
                  {api && api.list[5].weather[0].description}
                </div>
                <div className="rain">
                <IoIosWater />
                {api && api.list[5].main.humidity}%
                </div>
                <div className="wind">
                <BiWind />
                {api && api.list[0].wind.speed}m/s
                </div>
              </div>
            </div>
          </S_weatherBar>
        </AccordionSummary>
        <AccordionDetails>
        <S_weatherBar>
            <div className="detail-box">
              <div className="detail-left">
                <div className="detail-left-above">
                  <div className="day">
                    <h3>Ngày</h3>
                  </div>
                  <div className="temp-and-icon">
                    <span>
                      {api && Math.round(api.list[5].main.temp_max - 280)}
                      <TbTemperatureCelsius />
                    </span>
                    <span>
                      {weatherIconDay[api && api.list[5].weather[0].main]}
                    </span>
                  </div>
                </div>
                <div className="detail-right-below">
                  <div className="information-below">
                    <ul>
                      <li>
                        <IoIosWater />
                        Độ ẩm: {api && api.list[5].main.humidity}%
                      </li>
                      <li>
                        <FaCompressArrowsAlt />
                        Áp suất: {api && api.list[5].main.grnd_level}pHA
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <BsSunriseFill />
                        Bình minh:{" "}
                        {new Date((api && api.city.sunrise) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                      <li>
                        <BsSunsetFill />
                        Hoàng hôn:{" "}
                        {new Date((api && api.city.sunset) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="detail-right">
                <div className="detail-right-above">
                  <div className="night">
                    <h3>Đêm</h3>
                  </div>
                  <div className="temp-and-icon">
                    <span>
                      {api && Math.round(api.list[5].main.temp_min - 280)}
                      <TbTemperatureCelsius />
                    </span>
                    <span>
                      {weatherIconNight[api && api.list[5].weather[0].main]}
                    </span>
                  </div>
                </div>
                <div className="detail-right-below">
                  <div className="information-below">
                    <ul>
                      <li>
                        <IoIosWater />
                        Độ ẩm: {api && api.list[5].main.humidity}%
                      </li>
                      <li>
                        <FaCompressArrowsAlt />
                        Áp suất: {api && api.list[5].main.grnd_level}pHA
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <BsSunriseFill />
                        Tầm nhìn:{" "}
                        {api && api.list[5].visibility/1000}km
                      </li>
                      <li>
                        <BsSunsetFill />
                        Hoàng hôn:{" "}
                        {new Date((api && api.city.sunset) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </S_weatherBar>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <S_weatherBar>
            <div className="box">
              <div className="left-side">
                <div className="date">{aryDates[2]}</div>{" "}
                <div className="temp">
                  <strong>
                    {api && Math.round(api.list[10].main.temp_max - 280)}
                    <TbTemperatureCelsius />
                  </strong>
                  /{api && Math.round(api.list[10].main.temp_min - 280)}
                  <TbTemperatureCelsius />
                </div>{" "}
                <div className="desc">
                <div className="weather-image"><img src={`http://openweathermap.org/img/wn/${api && api.list[10].weather[0].icon}.png`} /></div>
                  {api && api.list[10].weather[0].description}
                </div>
                <div className="rain">
                <IoIosWater />
                {api && api.list[10].main.humidity}%
                </div>
                <div className="wind">
                <BiWind />
                {api && api.list[10].wind.speed}m/s
                </div>
              </div>
            </div>
          </S_weatherBar>
        </AccordionSummary>
        <AccordionDetails>
        <S_weatherBar>
            <div className="detail-box">
              <div className="detail-left">
                <div className="detail-left-above">
                  <div className="day">
                    <h3>Ngày</h3>
                  </div>
                  <div className="temp-and-icon">
                    <span>
                      {api && Math.round(api.list[10].main.temp_max - 280)}
                      <TbTemperatureCelsius />
                    </span>
                    <span>
                      {weatherIconDay[api && api.list[10].weather[0].main]}
                    </span>
                  </div>
                </div>
                <div className="detail-right-below">
                  <div className="information-below">
                    <ul>
                      <li>
                        <IoIosWater />
                        Độ ẩm: {api && api.list[10].main.humidity}%
                      </li>
                      <li>
                        <FaCompressArrowsAlt />
                        Áp suất: {api && api.list[10].main.grnd_level}pHA
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <BsSunriseFill />
                        Bình minh:{" "}
                        {new Date((api && api.city.sunrise) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                      <li>
                        <BsSunsetFill />
                        Hoàng hôn:{" "}
                        {new Date((api && api.city.sunset) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="detail-right">
                <div className="detail-right-above">
                  <div className="night">
                    <h3>Đêm</h3>
                  </div>
                  <div className="temp-and-icon">
                    <span>
                      {api && Math.round(api.list[10].main.temp_min - 280)}
                      <TbTemperatureCelsius />
                    </span>
                    <span>
                      {weatherIconNight[api && api.list[10].weather[0].main]}
                    </span>
                  </div>
                </div>
                <div className="detail-right-below">
                  <div className="information-below">
                    <ul>
                      <li>
                        <IoIosWater />
                        Độ ẩm: {api && api.list[10].main.humidity}%
                      </li>
                      <li>
                        <FaCompressArrowsAlt />
                        Áp suất: {api && api.list[10].main.grnd_level}pHA
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <BsSunriseFill />
                        Tầm nhìn:{" "}
                        {api && api.list[10].visibility/1000}km
                      </li>
                      <li>
                        <BsSunsetFill />
                        Hoàng hôn:{" "}
                        {new Date((api && api.city.sunset) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </S_weatherBar>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
        <S_weatherBar>
            <div className="box">
              <div className="left-side">
                <div className="date">{aryDates[3]}</div>{" "}
                <div className="temp">
                  <strong>
                    {api && Math.round(api.list[15].main.temp_max - 280)}
                    <TbTemperatureCelsius />
                  </strong>
                  /{api && Math.round(api.list[15].main.temp_min - 280)}
                  <TbTemperatureCelsius />
                </div>{" "}
                <div className="desc">
                <div className="weather-image"><img src={`http://openweathermap.org/img/wn/${api && api.list[15].weather[0].icon}.png`} /></div>
                  {api && api.list[15].weather[0].description}
                </div>
                <div className="rain">
                <IoIosWater />
                {api && api.list[15].main.humidity}%
                </div>
                <div className="wind">
                <BiWind />
                {api && api.list[15].wind.speed}m/s
                </div>
              </div>
            </div>
          </S_weatherBar>
        </AccordionSummary>
        <AccordionDetails>
        <S_weatherBar>
            <div className="detail-box">
              <div className="detail-left">
                <div className="detail-left-above">
                  <div className="day">
                    <h3>Ngày</h3>
                  </div>
                  <div className="temp-and-icon">
                    <span>
                      {api && Math.round(api.list[15].main.temp_max - 280)}
                      <TbTemperatureCelsius />
                    </span>
                    <span>
                      {weatherIconDay[api && api.list[15].weather[0].main]}
                    </span>
                  </div>
                </div>
                <div className="detail-right-below">
                  <div className="information-below">
                    <ul>
                      <li>
                        <IoIosWater />
                        Độ ẩm: {api && api.list[15].main.humidity}%
                      </li>
                      <li>
                        <FaCompressArrowsAlt />
                        Áp suất: {api && api.list[15].main.grnd_level}pHA
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <BsSunriseFill />
                        Bình minh:{" "}
                        {new Date((api && api.city.sunrise) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                      <li>
                        <BsSunsetFill />
                        Hoàng hôn:{" "}
                        {new Date((api && api.city.sunset) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="detail-right">
                <div className="detail-right-above">
                  <div className="night">
                    <h3>Đêm</h3>
                  </div>
                  <div className="temp-and-icon">
                    <span>
                      {api && Math.round(api.list[15].main.temp_min - 280)}
                      <TbTemperatureCelsius />
                    </span>
                    <span>
                      {weatherIconNight[api && api.list[15].weather[0].main]}
                    </span>
                  </div>
                </div>
                <div className="detail-right-below">
                  <div className="information-below">
                    <ul>
                      <li>
                        <IoIosWater />
                        Độ ẩm: {api && api.list[15].main.humidity}%
                      </li>
                      <li>
                        <FaCompressArrowsAlt />
                        Áp suất: {api && api.list[15].main.grnd_level}pHA
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <BsSunriseFill />
                        Tầm nhìn:{" "}
                        {api && api.list[15].visibility/1000}km
                      </li>
                      <li>
                        <BsSunsetFill />
                        Hoàng hôn:{" "}
                        {new Date((api && api.city.sunset) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </S_weatherBar>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
        <S_weatherBar>
            <div className="box">
              <div className="left-side">
                <div className="date">{aryDates[4]}</div>{" "}
                <div className="temp">
                  <strong>
                    {api && Math.round(api.list[20].main.temp_max - 280)}
                    <TbTemperatureCelsius />
                  </strong>
                  /{api && Math.round(api.list[20].main.temp_min - 280)}
                  <TbTemperatureCelsius />
                </div>{" "}
                <div className="desc">
                <div className="weather-image"><img src={`http://openweathermap.org/img/wn/${api && api.list[20].weather[0].icon}.png`} /></div>
                  {api && api.list[20].weather[0].description}
                </div>
                <div className="rain">
                <IoIosWater />
                {api && api.list[20].main.humidity}%
                </div>
                <div className="wind">
                <BiWind />
                {api && api.list[20].wind.speed}m/s
                </div>
              </div>
            </div>
          </S_weatherBar>
        </AccordionSummary>
        <AccordionDetails>
        <S_weatherBar>
            <div className="detail-box">
              <div className="detail-left">
                <div className="detail-left-above">
                  <div className="day">
                    <h3>Ngày</h3>
                  </div>
                  <div className="temp-and-icon">
                    <span>
                      {api && Math.round(api.list[20].main.temp_max - 280)}
                      <TbTemperatureCelsius />
                    </span>
                    <span>
                      {weatherIconDay[api && api.list[20].weather[0].main]}
                    </span>
                  </div>
                </div>
                <div className="detail-right-below">
                  <div className="information-below">
                    <ul>
                      <li>
                        <IoIosWater />
                        Độ ẩm: {api && api.list[20].main.humidity}%
                      </li>
                      <li>
                        <FaCompressArrowsAlt />
                        Áp suất: {api && api.list[20].main.grnd_level}pHA
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <BsSunriseFill />
                        Bình minh:{" "}
                        {new Date((api && api.city.sunrise) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                      <li>
                        <BsSunsetFill />
                        Hoàng hôn:{" "}
                        {new Date((api && api.city.sunset) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="detail-right">
                <div className="detail-right-above">
                  <div className="night">
                    <h3>Đêm</h3>
                  </div>
                  <div className="temp-and-icon">
                    <span>
                      {api && Math.round(api.list[20].main.temp_min - 280)}
                      <TbTemperatureCelsius />
                    </span>
                    <span>
                      {weatherIconNight[api && api.list[20].weather[0].main]}
                    </span>
                  </div>
                </div>
                <div className="detail-right-below">
                  <div className="information-below">
                    <ul>
                      <li>
                        <IoIosWater />
                        Độ ẩm: {api && api.list[20].main.humidity}%
                      </li>
                      <li>
                        <FaCompressArrowsAlt />
                        Áp suất: {api && api.list[20].main.grnd_level}pHA
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <BsSunriseFill />
                        Tầm nhìn:{" "}
                        {api && api.list[20].visibility/1000}km
                      </li>
                      <li>
                        <BsSunsetFill />
                        Hoàng hôn:{" "}
                        {new Date((api && api.city.sunset) * 1000)
                          .toTimeString()
                          .slice(0, 5)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </S_weatherBar>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

const S_weatherBar = Styled.div`
  .box{
    width: 200%;
    height: 100%;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;
    font-size: 20px;
  }

  .left-side{
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
  }

  .today{
   margin-right: 120px;
   font-size: 20px;
   line-height: 50px;
  }
  .date{
   position: relative;
   right: 10px;
   line-height: 50px;
   /* border: 1px solid black; */
   width: 200px;
   font-size: 15px;
  }

  .temp{
    position: relative;
    left: 50px;
    font-size: 20px;
    /* border: 1px solid black; */
    width: 120px;
  }

  .desc{
    font-size: 15px;
    display: flex;
    position: relative;
    left: 60px;
    /* border: 1px solid black; */
    width: 140px;
  }


  .rain{
    position: relative;
    left: 200px;
    font-size: 15px;
    line-height: 50px;
  } 

  .wind{
    position: relative;
    left: 250px;
    font-size: 15px;
    line-height: 50px;
  }

  .detail-box{
    width: 100%;
    height: 100%;
    display: flex;
  }

  .detail-left{
    width: 49%;
    height: 100%;
    border: 1px solid grey;
  }

  .detail-right{
    width: 49%;
    height: 100%;
    border: 1px solid grey;
  }

  .temp-and-icon{
    font-size: 70px;
  }
  
  .information-below{
    display: flex;
    /* border-top: 1px solid black; */
  }

  .information-below ul {
    margin-right: 35px;
    /* border: 1px solid black; */
    list-style: none;
  }

  .information-below ul li{
    padding-top: 10px;
    font-size: 15px;
  }
`;