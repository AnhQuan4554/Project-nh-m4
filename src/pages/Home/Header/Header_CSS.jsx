import styled from "styled-components";

export const S_Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #474158;
  width: 100%;
  height: 82px;
  justify-content: space-between;
  padding: 0 105px;
`;
export const S_headLogo = styled.div`
  display: flex;
  align-items: center;
  .contentLogo p {
    color: #fff;
    margin-left: 10px;
  }
  .imgLogo {
    font-size: 50px;
    color: #fff;
    transition: all 1s;
    &:hover{
      transform: rotate(360deg);
      
    }
  }
`;
export const S_headSearch = styled.div`
  width: 370px;
  height: 32px;
  border-radius: 20px;
  background-color: #3e394b;
  position: relative;
  color: #fff;
  input {
    width: 370px;
    height: 32px;
    font-family: "Josefin Sans", sans-serif;
    border-radius: 20px;
    background-color: #3e394b;
    position: relative;
    color: #fff;
    outline: none;
    border: none;
    padding: 0 80px;
    &::placeholder {
      text-align: center;
      font-family: "Josefin Sans", sans-serif;
    }
  }

  .headSearch_icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 14px;
    font-size: 18px;
  }

  .InputSearch:focus ~ .suggest_list {
    display: block !important;
  }
`;
export const S_head_User = styled.div`
  width: 200px;
  background-color: #3e394b;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0 30px;
  a {
    color: #fff;
    text-decoration: none;
    display: block;
  }
`;

/////////////////animation
export const S_Navigate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2b2735;
  color: #fff;
  height: 40px;
  padding: 0 164px;
  .Navigate_link {
    &.active {
      border-bottom: 3px #ccc solid;
    }
    height: 100%;
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export const S_suggest = styled.ul`
  width: 370px;
  background-color: #dfdddd;
  position: absolute;
  top: 100%;
  left: 0;
  overflow: hidden;
  border-radius: 10px;
  z-index: 10;
  li {
    padding: 10px 35px;
    margin-bottom: 5px;
    list-style: none;
    color: #000;
    border-bottom: 1px solid #888;
    &:hover {
      background-color: #d7b7b7;
      cursor: pointer;
    }
    &:last-child {
      border: none;
    }
  }
`;
