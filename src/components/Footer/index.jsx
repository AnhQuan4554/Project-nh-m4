import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BsFacebook, BsTwitter, BsInstagram, BsTelegram } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const Footer = () => {
  return (
    <S_Footer>
      <div className="container">
        <section className="header">
          <div className="social-container">
            <p>Connect with us</p>
            <a href="/" target="_blank">
              <BsFacebook />
            </a>
            <a href="/" target="_blank">
              <BsTwitter />
            </a>
            <a href="/" target="_blank">
              <BsInstagram />
            </a>
            <a href="/" target="_blank">
              <BsTelegram />
            </a>
          </div>
          <div className="logo">
            <FaSun fontSize="50px" />
            <span>THE FORECAST WEATHER</span>
          </div>
        </section>
        <section className="body">
          <ul className="corporate">
            <li>
              <Link to="/">Feedback</Link>
            </li>
            <li>
              <Link to="/">Weather API</Link>
            </li>
            <li>
              <Link to="/Aboutus">About us</Link>
            </li>
          </ul>
          <ul className="privacy">
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Accessibility Statement</Link>
            </li>
            <li>
              <Link to="/">Data Vendors</Link>
            </li>
          </ul>
          <div className="timeline">
            Starting on <span>July 17, 2022</span>
          </div>
        </section>
        <section className="footer">
          Provided by
          <a href="https://openweathermap.org" target="_blank">
            <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" />
          </a>
        </section>
      </div>
    </S_Footer>
  );
};

export default Footer;

const S_Footer = styled.footer`

  /* background: linear-gradient(
    0deg,
    #e5dee2,
    #e5dee2 20%,
    #aba2b4 60%,
    #59516e 90%,
    #59516e
  ); */
  background-color: #fff;

a{
  color: #000;
}
  .container {
    /* padding: 30px;
    width: 1200px;
    margin: auto; */

    .header {
      display: flex;
      justify-content: space-between;
      padding: 30px 120px 0 120px;
      .social-container {
        font-size: 26px;

        p {
          font-weight: bold;
        }

        a {
          transition: all 0.16s ease-out;

          &:hover {
            color: pink;
          }
        }

        svg {
          margin-right: 16px;
          margin-top: 12px;
        }
      }

      .logo {
        display: flex;
        align-items: center;
        user-select: none;
        /* color: pink; */

        span {
          margin-left: 10px;
        }
      }
    }

    .body {

      .corporate {
        display: flex;
        justify-content: center;

        li {
          margin: 0 8px;
          font-size: 15px;

          &:hover {
            color: rgb(68, 109, 233);
          }
        }
      }

      .privacy {
        margin-top: 25px;
        display: flex;
        justify-content: center;

        li {
          padding: 4px 10px;
          font-weight: bold;
          border-right: 1px solid #000;

          &:last-child {
            border: none;
          }

          &:hover {
            color: rgb(68, 109, 233);
            border-right-color: rgb(68, 109, 233);
          }
        }
      }

      .timeline {
        margin-top: 30px;
        text-align: center;

        span {
          color: red;
          font-weight: bold;
        }
      }
    }

    .footer {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        margin-left: 10px;
        padding: 8px;
        width: 80px;
        background-color: #48484a;
        border-radius: 8px;
        display: flex;
        align-items: center;

        img {
          width: 100%;
        }
      }
    }
  }
`;
