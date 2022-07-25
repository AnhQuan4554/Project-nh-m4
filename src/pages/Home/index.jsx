import React from "react";
import styled from 'styled-components';
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
  setHourlyWeather,
  checkLogin
}) => {
  return (
    <>
    { !checkLogin ?  <BodySection_withoutSign >
      <Currently_day inforWeather={inforWeather} />
      <h1 className="suggestText">Bạn cần đăng nhập để xem thêm thông tin chi tiết
         và để được sử dụng tính năng lên lịch</h1>
    </BodySection_withoutSign> 
    :  <BodySection
    
        mainContent=  { [
          <Currently_day inforWeather={inforWeather} />,
          <CurrentWeather
            inforWeather={inforWeather}
            setHourlyWeather={setHourlyWeather}
          />
        ] }
        rightContent={[<AddToDo />, <Planned />]}
        />  
    }
   
      
    </>
  );
};

export default Home;
const BodySection_withoutSign =styled.div`
    max-width: 800px;
    margin-top: 15px;
    margin-left: 165px;
   .suggestText{
    margin-top: 50px;
    width: 100%;
   }
`