import React from "react";
import { S_itemFiveDay } from "./S_FiveDay";
import { IoIosWater } from "react-icons/io";
import { TbTemperatureCelsius } from 'react-icons/tb';

import { BiWind } from "react-icons/bi";
const EachDay = ({ index, contentApi }) => {
  const d = new Date();
  let day = d.getDay();
  const arrDay = ["Cn", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7"];
  return (
    <S_itemFiveDay>
      <div className="main_infor">
        <div className="main_infor_item itemDay">
          {index ==0 ? 'Hôm Nay' :  (day + index < 7 ? arrDay[day + index] : arrDay[(day + index) % 7])}
         
        </div>
        <div className="main_infor_item itemTemperature">
          <span className="tempera">
            {contentApi &&
              Math.round(contentApi.list[index].main.temp_max - 280)}<TbTemperatureCelsius/>
          </span>
          <span>/</span>
          <span className="temperaMax">
            {contentApi &&
              Math.round(contentApi.list[index].main.temp_min - 280)}<TbTemperatureCelsius/>
          </span>
        </div>
        <div className="main_infor_item item_describe">
          <div className="describe_icon">
            <img
              src={`http://openweathermap.org/img/wn/${
                contentApi && contentApi.list[index].weather[0].icon
              }.png`}
            />
          </div>
          <span className="describe_text">
            {contentApi && contentApi.list[index].weather[0].description}
          </span>
        </div>
      </div>
      <div className="extra_infor">
        <div className="extra_infor_item item_humidity">
         
          <IoIosWater style={{color : '#1b4de4'}} /> <span>{contentApi && contentApi.list[index].main.humidity}%</span>
        </div>
        <div className="extra_infor_item item_wet">
     
          <BiWind style={{color : '#1b4de4'}} /> <span>{contentApi && contentApi.list[index].wind.speed}m/s</span>
        </div>
      </div>
    </S_itemFiveDay>
  );
};

export default EachDay;
