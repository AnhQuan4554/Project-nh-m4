import styled from 'styled-components'

export const S_Header = styled.header`
    display: flex;
    align-items: center;
    background-color: #474158;
    width: 100%;
    height: 82px;
    justify-content: space-between;
    padding:  0 105px;
`
export const S_headLogo = styled.div`
    display: flex;
    align-items: center;
     .contentLogo p{
           color: #fff;
           margin-left: 10px;
        }
    .imgLogo{
        font-size: 50px;
        color:  #fff;
    }
`
export const S_headSearch = styled.div`
    width: 370px;
    height: 32px;
    border-radius: 20px;
    background-color: #3e394b;
    position: relative;
    color: #fff;
    input{
            width: 370px;
        height: 32px;
        border-radius: 20px;
        background-color: #3e394b;
        position: relative;
        color: #fff;
        outline: none;
        border: none;
        padding:  0 80px;
        &::placeholder{
            text-align: center;
        }
       
    }
 
    .headSearch_icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 14px;
        font-size: 18px;
    }
`
export const S_head_User = styled.div`
    width: 200px;
    background-color: #3e394b;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 0 30px;
    a{
        color: #fff;
        text-decoration: none;
        display: block;

    }
`

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
    .Navigate_link{
        &.active{ 
            border-bottom: 3px #ccc solid;
        }
        height: 100%;
        display: flex;
        align-items: center;
            a{
                text-decoration: none;
                color: #fff;
            }
    }
`
export const S_suggest= styled.ul`
    width: 370px;
    max-height: 240px;
    background-color: #d1c7c7;
    position: absolute;
    top: 100%;
    left: 0;
    overflow: hidden;
    z-index: 10;
    li{
        list-style: none;
    }

`