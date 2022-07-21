
import Accordion from './Accordion'
import styled from 'styled-components';
import React from 'react'

const Index = () => {
  return (
    <>
    <S_Index>
        <div className='big-container'>
            <div className='left-container'></div>
            <div className="forecast-box">
                {/* <p><h1>Thời tiết 5 ngày</h1> - Thành phố Hà Nội</p> */}
                <Accordion />
            </div>
            <div className="right-container"></div>
        </div>
    </S_Index>
    </>
  )
}


const S_Index = styled.div`
    .big-container{
        display: flex;
        background-color: #59516e;
        background-image: linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e);

    }

    .left-container{
        width: 20%;
        height: 100vh;
    }

    .forecast-box{
        width: 50%;
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

export default Index