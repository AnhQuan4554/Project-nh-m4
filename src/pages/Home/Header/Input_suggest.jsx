import React,{useState,useEffect} from 'react'
import{S_suggest} from'./Header_CSS'
import{Test} from'./Header_CSS'
const Input_suggest = ({setShowSuggest,apiFetch,setnameLocal,nameLocal}) => {
    const locals = localStorage.getItem('locations') ? JSON.parse(localStorage.getItem('locations')):[]
  
    const handleClick = (e)=>{ 
        console.log(e.target.innerHTML,'key của nó đây nha')
         setnameLocal(e.target.innerHTML)
         console.log('khi click thi nameLocal = ',nameLocal)
         setShowSuggest(false)
         nameLocal&& apiFetch()
         setTimeout(()=>{
            setnameLocal('')
         },2000)
        }
       /* xử lí local */
       
    return (
    <S_suggest>
        {locals.reverse().map((iteam,index)=>(
            <li onClick={(e)=>{handleClick(e)}}   key={index}>{iteam}</li>
         
        ))}
    </S_suggest>
  );
};

export default Input_suggest;
