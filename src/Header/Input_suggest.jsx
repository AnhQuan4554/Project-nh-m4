import React,{useState} from 'react'
import{S_suggest} from'./Header_CSS'
const Input_suggest = ({showSuggest,setShowSuggest}) => {
    const locals = localStorage.getItem('locations') ? JSON.parse(localStorage.getItem('locations')):[]
    
    
    return (

    <S_suggest >
        {locals.map((iteam,index)=>(
            <li  key={index}>{iteam}</li>
        ))}
    </S_suggest>
  )
}

export default Input_suggest