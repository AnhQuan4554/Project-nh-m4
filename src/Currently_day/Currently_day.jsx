import React from 'react'
import styled from 'styled-components'
import { TbTemperatureCelsius } from 'react-icons/tb';
import {S_headerCurrently,S_container,S_location,S_contentCurrently} from './Currently_CSS'
const Currently_day = ({inforWeather}) => {
  // console.log(inforWeather,'ở curenday')
  const temp =inforWeather && Number(inforWeather.main.temp-280).toFixed(1)
  const tempMin =inforWeather&& Number(inforWeather.main.temp_min-280).toFixed(1)
  const tempMax = inforWeather&& Number(inforWeather.main.temp_max-280).toFixed(1)
  const icon = inforWeather&&  inforWeather.weather[0].icon
  let newDate = new Date()
  let minute  = newDate.getMinutes()
  let hours = newDate.getHours();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return (
  
      <S_container >
            <S_headerCurrently className="headerCurrently">
                <S_location >
                        <span className="location_name">{inforWeather&& inforWeather.name}</span>
                        <div className="curently_hour">Kể từ {hours} giờ {minute} phút</div>{/* dùng gethour */}
                </S_location>
                
                <S_contentCurrently >
                    <div className="content_dedicate">

                      <div className="tempCurrently">
                        <h1> {inforWeather&&temp}</h1>{/* call API */}
                          <TbTemperatureCelsius style={{fontSize:'40px',color:'yellow'}}/>
                      </div>
                      <div className="time">
                        <span>Ngày {date}</span>  <span>tháng {month}</span>
                      </div>
                        <div className="content_bonus">
                          {/* <p className="dateCurrently">Nhiệt độ của ngày </p> */}
                          <p className="tempMin">Nhiệt độ thấp nhất
                           <span> {inforWeather&&tempMin} <TbTemperatureCelsius style={{color:'#fff'}}/> </span> 
                           </p>
                          <p className="tempMax">Nhiệt  độ cao nhất <span> {inforWeather&&tempMax}<TbTemperatureCelsius style={{color:'red'}} /></span></p>
                        </div>
                    </div>
                    <div className="header_img">
                        {/* thay nguồn API sau  */}
                        <img src={inforWeather&& `http://openweathermap.org/img/wn/${icon}.png`} alt="" />
                    </div>
                </S_contentCurrently>
            </S_headerCurrently>
            {/* <div className="Inf_desvribe">
                <p>Một số thông tin chi tiết</p>

                <span className="windy_visibility">Tầm nhìn 1000 m</span>
                <span className="windy_speed">1500</span>
                <span className="windy_speed">1500</span>
                <span className="windy_speed">1500</span>
                
            </div> */}
    </S_container>

  )
}

export default Currently_day