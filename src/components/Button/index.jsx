import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  return <S_Button>{text}</S_Button>;
};

export default Button;

const S_Button = styled.button`
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 14px;
  border: none;
  border-radius: 16px;
  background-color: #1b4de4;
  cursor: pointer;
  transition: all 0.18s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(27, 77, 228, 0.6);
  }
`;
