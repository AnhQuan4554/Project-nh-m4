import React from "react";
import styled from "styled-components";

const AirQuality = () => {
  return (
    <S_AirQuality>
        <h3 className="label">chỉ số ch.lượng kh.khí</h3>
    </S_AirQuality>
  );
};

export default AirQuality;

const S_AirQuality = styled.section`
  margin-bottom: 12px;
  padding: 16px;
  background-color: #fff;
  border-radius: 6px;

  .label {
    text-transform: uppercase;
  }
`;
