import React,{useState,useEffect,createContext} from 'react'
import styled from 'styled-components'
import { FaSun } from 'react-icons/fa';
import { FaSearchLocation } from 'react-icons/fa';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
//link css
import{S_Header,S_headLogo,S_headSearch,S_head_User}from './Header_CSS'
import Input_search from './Input_search';




const Header = ({inforWeather,setInforWeather}) => {
    const [nameLocal, setnameLocal] = useState('Hưng Yên') // tên đia chỉ cần tìm 
    // const [inforWeather, setInforWeather] = useState(null)//khác với cái trong fetch là chữ 's'
    const myApiKey = `7929f327fc4a780215bc2a5b14f3fe24`;
    const keyApi_currentday = `https://api.openweathermap.org/data/2.5/weather?q=${nameLocal}&appid=${myApiKey}`
    ///call API
    useEffect(()=>{ // ngay khi mới vào thì call luôn ở địa điểm người dung 
      //còn khi nhập và ấn enter ở Input_search cx call 
      apiFetch()
      setnameLocal('')
    },[])
    
    const apiFetch = async()=>{
        try {
            let response = await fetch(`${keyApi_currentday}`);
            let  inforWeathers = await response.json(); //toàn bộ thông tin thời tiết ngày đang nhập xc n
            inforWeathers&&setInforWeather(inforWeathers)
                 // thêm các địa chỉ chi nhập ở input vào local 
          if(inforWeathers.name){ // nếu tồn tại tên thành phố khi call thì mới thêm vào local

            const local = localStorage.getItem('locations') ? JSON.parse(localStorage.getItem('locations')):[]
            localStorage.setItem('locations',JSON.stringify([...local,nameLocal]))
          }

          } catch(err) {
            // catches errors both in fetch and response.json
            console.log(`lỗi rồi`)
            alert(err);
          }
          
    }
  
  return (
    <S_Header>
        <S_headLogo className="headLogo">
            <div className="imgLogo">
                <FaSun/>
            </div>
            <div className="contentLogo">
                <p>THE FORECAST WEATHER</p>
            </div>
        </S_headLogo>
        <S_headSearch className="headSearch">
                <Input_search
                        setnameLocal = {setnameLocal}
                        nameLocal = {nameLocal}
                        apiFetch = {apiFetch}
                        inforWeather = {inforWeather}
                />
                 {/* search đia điểm , và các địa điểm sẽ đc lưu vào local */}
                <div className="headSearch_icon">
                    <FaSearchLocation/>
                </div> 
        </S_headSearch>
        <S_head_User className="head_User">
            <div className="signIn">
                <Link to="">SIGN IN</Link> {/* chỗ này để điền link */}
            </div>
            <div className="signUp">
                <Link to="">SIGN UP</Link> {/* chỗ này để điền link */}
            </div>
        </S_head_User>
    </S_Header>

  )
}

export default Header
