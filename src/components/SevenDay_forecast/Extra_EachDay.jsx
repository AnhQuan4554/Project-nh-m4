import React from "react";
import { S_Extra_EachDay } from "./S_FiveDay";
import { Col, Row } from "antd";
import { TbTemperatureCelsius } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { BiWind } from "react-icons/bi";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";
const Extra_EachDay = ({ index, contentApi }) => {
  return (
    <S_Extra_EachDay>
      <Row gutter={[10,10]}>
        <Col xl={12} md={12} sm={24}>
          <div className="dayTime">
            <h3 className="time">Ngày</h3>
            <div className="header_infor">
              <h2>
                {contentApi &&
                  Math.round(contentApi.list[index].main.temp_max - 280)}
                <TbTemperatureCelsius />
              </h2>
              <div className="describe_icon">
                <img
                  src={`http://openweathermap.org/img/wn/${
                    contentApi && contentApi.list[index].weather[0].icon
                  }.png`}
                />
              </div>
            </div>
            <div className="tableInfor">
              <div className="tableInfor_item">
                <div className="extra_infor_item item_eye">
                  <AiOutlineEye style={{ color: "#1b4de4",fontSize:`22px` }} />{" "}
                  <span>
                    Tầm nhìn : 
                    { contentApi && contentApi.list[index].visibility} m
                  </span>
                </div>
                <div className="extra_infor_item item_wet">
                  <BiWind style={{ color: "#1b4de4",fontSize:`22px` }} />{" "}
                  <span>
                    {contentApi && contentApi.list[index].wind.speed}m/s
                  </span>
                </div>
              </div>
              <div className="tableInfor_item">
                <div className=" extra_infor_item sunrise">
                  <BsSunriseFill style={{ color: "#1b4de4",fontSize:`22px` }} />
                  
                  <span>Bình minh : {new Date((contentApi && contentApi.city.sunrise) * 1000)
                    .toTimeString()
                    .slice(0, 5)}</span>
                  
                </div>
                <div className="extra_infor_item sunset">
                  <BsSunsetFill  style={{ color: "#1b4de4",fontSize:`22px` }}/>
                 
                  <span>Hoàng hôn : {new Date((contentApi && contentApi.city.sunset) * 1000)
                    .toTimeString()
                    .slice(0, 5)}</span>
                  
                </div>
              </div>
            </div>
          </div>

        </Col>
        <Col xl={12} md={12} sm={24}>
          <div className="dayTime">
            <h3 className="time">Ngày</h3>
            <div className="header_infor">
              <h2>
                {contentApi &&
                  Math.round(contentApi.list[index].main.temp_max - 280)}
                <TbTemperatureCelsius />
              </h2>
              <div className="describe_icon">
                <img
                  src={`http://openweathermap.org/img/wn/${
                    contentApi && contentApi.list[index].weather[0].icon
                  }.png`}
                />
              </div>
            </div>
            <div className="tableInfor">
              <div className="tableInfor_item">
                <div className="extra_infor_item item_eye">
                  <AiOutlineEye style={{ color: "#1b4de4" }} />{" "}
                  <span>
                    {contentApi && contentApi.list[index].visibility} m
                  </span>
                </div>
                <div className="extra_infor_item item_wet">
                  <BiWind style={{ color: "#1b4de4" }} />{" "}
                  <span>
                    {contentApi && contentApi.list[index].wind.speed}m/s
                  </span>
                </div>
              </div>
              <div className="tableInfor_item">
                <div className=" extra_infor_item sunrise">
                  <BsSunriseFill style={{ color: "#1b4de4" }} />
                  
                  <span>Bình minh : {new Date((contentApi && contentApi.city.sunrise) * 1000)
                    .toTimeString()
                    .slice(0, 5)}</span>
                  
                </div>
                <div className="extra_infor_item sunset">
                  <BsSunsetFill  style={{ color: "#1b4de4" }}/>
                 
                  <span>Hoàng hôn : {new Date((contentApi && contentApi.city.sunset) * 1000)
                    .toTimeString()
                    .slice(0, 5)}</span>
                  
                </div>
              </div>
            </div>
          </div>

        </Col>
      </Row>
    </S_Extra_EachDay>
  );
};

export default Extra_EachDay;
