import React from "react";
import styled from "styled-components";
import AddToDo from "../../pages/addTodo";
import Planned from "../../pages/planned";
const BodySection = ({ rightContent = [], mainContent }) => {
  return (
    <S_BodySection>
      <div className="main__content">
        {mainContent.map((item, index) => (
          <div key={index} className="wrap_main__content ">
            {item}
          </div>
        ))}
      </div>
      {/* bỏ đi thay thế cái này bằng lịch */}
      <div className="right__content">
        {rightContent.map((item, index) => (
          <div key={index} className="wrap_right__content">
            {item}
          </div>
        ))}
      </div>
    </S_BodySection>
  );
};

export default BodySection;

const S_BodySection = styled.section`
  max-width: 100%;
  margin-top: 15px;
  margin-left: 165px;
  display: flex;

  .main__content {
    width: 800px;
    border-radius: 6px;
  }

  .right__content {
    width: 100% - 800px;
    border-radius: 6px;
    margin-left: 20px;
  }
`;
