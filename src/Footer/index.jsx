import React from "react";
import styled from "styled-components";

import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <S_Footer>
      <div className="container">
        <div className="social-container">
          <BsFacebook />
        </div>
      </div>
    </S_Footer>
  );
};

export default Footer;

const S_Footer = styled.footer`
  background-color: #fff;
  margin-top: 60px;
  display: flex;

  .container {
    width: 1200px;
    margin: 0 auto;
  }
`;
