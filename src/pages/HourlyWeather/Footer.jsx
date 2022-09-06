import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../../components/Button";

const HourlyWeatherFooter = () => {
  return (
    <S_HourlyWeatherFooter>
      <Link to="/Index">
        <Button text="Thời tiết 7 ngày tới" />
      </Link>
    </S_HourlyWeatherFooter>
  );
};

export default HourlyWeatherFooter;

const S_HourlyWeatherFooter = styled.div`
  width: 100%;
  padding: 15px 26px;
  background-color: #fff;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  
`;
