
import Accordion from './Accordion'
import styled from 'styled-components';
import React from 'react'

const Index = ({inforWeather,checkLogin}) => {

  return (
    <>
    {checkLogin ?  <S_Index>
        <div className='big-container'>
            <div className='left-container'></div>
            <div className="forecast-box">
                <p><h1>Thời tiết 5 ngày</h1> - Thành phố {inforWeather && inforWeather.name && inforWeather.name}</p>
                <Accordion inforWeather= {inforWeather} />
            </div>
            <div className="right-container"></div>
        </div>
    </S_Index> : <ContentSugget>Bạn cần đăng nhập để xem thêm thông tin chi tiết</ContentSugget>}
   
    </>
  )
}


export default Index
const S_Index = styled.div`
    .big-container{
        display: flex;
        background-color: #59516e;
        background-image: linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e);
    }

    .big-container h1{
        display: inline-block;
    }

    .left-container{
        width: 20%;
        height: 100vh;
    }

    .forecast-box{
        width: 60%;
        height: 100vh;
        border: 1px solid black;
        background-color: white;
    }

    /* .forecast-box h1{
       display: inline-block;
    } */

    /* .forecast-box p{
       margin-left: 5px;
    } */

    .right-container{
        width: auto;
        height: 100vh;
    }
`
const ContentSugget =styled.h1`
    margin-top: 150px;
    text-align: center;
`