import Accordion from "./Accordion";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import FiveDay from "./FiveDay";
import Footer from "../Footer";

const Index = ({ inforWeather, checkLogin }) => {
  const [contentApi, setContentApi] = useState(null); // dữ liệu caall
  const city =
    inforWeather && inforWeather.name ? inforWeather.name : "Hưng Yên";
  const fetchForecast = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=vi&appid=7929f327fc4a780215bc2a5b14f3fe24`
        // "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&lang=vi&appid=7929f327fc4a780215bc2a5b14f3fe24"
      );
      const data = await res.json();
      setContentApi(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchForecast();
  }, [inforWeather && inforWeather.name && inforWeather.name]);
  return (
    <>
      {checkLogin ? (
        <S_Index>
          <div className="forecast-box">
            <div className="forecast-box_tittle">
              <h1>Dự đoán thời tiết các ngày tới </h1>
              <p>
                Thành phố{" "}
                {inforWeather && inforWeather.name && inforWeather.name}
              </p>
            </div>

            <FiveDay contentApi={contentApi} inforWeather={inforWeather} />
          </div>
        </S_Index>
      ) : (
        <ContentSugget>
          Bạn cần đăng nhập để xem thêm thông tin chi tiết
        </ContentSugget>
      )}
    </>
  );
};

export default Index;
const S_Index = styled.div`
min-height: 120vh;
  background: linear-gradient(
    0deg,
    #e5dee2,
    #e5dee2 20%,
    #aba2b4 60%,
    #59516e 90%,
    #59516e
  );
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .forecast-box {
    width: 80%;
    border: 1px solid black;
    .forecast-box_tittle {
      p {
        margin: 0;
      }
      h1 {
        margin: 0;
      }
      background-color: #fff;
      margin: 0;
      text-align: center;
    }
  }
`;
const ContentSugget = styled.h1`
  margin-top: 150px;
  text-align: center;
`;
