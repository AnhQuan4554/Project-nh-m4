import React from "react";
import styled from "styled-components";

import Button from "../../components/Button";

const HourlyWeatherFooter = () => {
  return (
    <S_HourlyWeatherFooter>
      <Button text="Thời tiết 5 ngày tới" />
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
