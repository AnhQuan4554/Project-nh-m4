import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../inputTodo'
import { BsSearch } from 'react-icons/bs'
const Header = ({ className, getToDosValue, day }) => {
    const [date, setDate] = useState("")

    const handleOnchange = (e) => {
        setDate(e.target.value)


    }
    const handleSearch = () => {
        const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
        getToDosValue(todos, date)


    }

    return (
        <SHeader>
            <div className={`${className} header-container `}>
                <div className='search'>
                    <Input className="date" type='date' value={date} onChange={handleOnchange} />
                    <BsSearch onClick={handleSearch} className='search-icon' />
                </div>
                <div className='day'>
                    <p className={`${day === 1 ? 'hightLight' : null}`} >Mon</p>
                    <p className={`${day === 2 ? 'hightLight' : null}`} >Tue</p>
                    <p className={`${day === 3 ? 'hightLight' : null}`} >Wed</p>
                    <p className={`${day === 4 ? 'hightLight' : null}`} >Thu</p>
                    <p className={`${day === 5 ? 'hightLight' : null}`} >Fri</p>
                    <p className={`${day === 6 ? 'hightLight' : null}`} >Sat</p>
                    <p className={`${day === 0 ? 'hightLight' : null}`} >Sun</p>
                </div>
            </div>
        </SHeader>
    )
}

export default Header
const SHeader = styled.div`
width: 350px;
.hightLight{
    position: relative;
    font-weight: bold;
    color: black;
    opacity: 1;
    /* border-bottom: solid 2px white ; */
   
   
}
.hightLight::before{
     content : "";
  position: absolute;
  left    : -8px;
  bottom  : -10px;
  height  : 1px;
  width   : 160%;  
  border-bottom: 2px solid white;
}
.search{
    display: flex;
}
.search-icon{
    position: absolute;
    right: 10%;
    bottom:50%;
}
.date{
    text-align: center;
    width: 320px;
  
}
p{
    color: white;
    cursor: pointer;
    opacity: 0.5;
   
}
.day{
    display: flex;  
    
    p{
        margin: 0 auto;
    }
    margin-bottom: 16px;
    
}
`;