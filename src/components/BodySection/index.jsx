import React from "react";
import styled from "styled-components";

const BodySection = ({ rightContent = [], mainContent }) => {
  return (
    <S_BodySection>
      <div className="main__content">{mainContent.map((item) => item)}</div>
      <div className="right__content">{rightContent.map((item) => item)}</div>
    </S_BodySection>
  );
};

export default BodySection;

const S_BodySection = styled.section`
  max-width: 1162px;
  margin: 12px auto;
  display: flex;

  .main__content {
    margin-right: 12px;
    width: 70%;
    border-radius: 6px;
    overflow: hidden;
  }

  .right__content {
    width: 30%;
    border-radius: 6px;
    overflow: hidden;
  }
`;
