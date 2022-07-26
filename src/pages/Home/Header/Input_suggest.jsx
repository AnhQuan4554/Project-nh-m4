import React,{useState,useEffect} from 'react'
import{S_suggest} from'./Header_CSS'
const Input_suggest = ({setShowSuggest,apiFetch,setnameLocal,nameLocal,handleFocus}) => {
    const locals = localStorage.getItem('locations') ? JSON.parse(localStorage.getItem('locations')):[]
    const [clickInput_item, setClickInput_item] = useState(false) // kiểm tra xem có click chưa
 
    useEffect(()=>{
        console.log(clickInput_item)
        if(clickInput_item){
            apiFetch()
            console.log(nameLocal,'useEffecc cảu click  suggest');
            setClickInput_item(false)
            setShowSuggest(false)
            setnameLocal('')
        }
     
    },[clickInput_item])

/* tại sao setShowsuggest để vào handleClcik lại sai  */
    const handleClick = (e)=>{ 
        setnameLocal(e.target.innerHTML)
         setClickInput_item(true)  

        }

    // console.log(clickInput_item);
    return (
    <S_suggest>
        {locals.reverse().map((iteam,index)=>(
            <li onClick={(e)=>{handleClick(e)}}   key={index}>{iteam}</li>
         
        ))}
    </S_suggest>
  );
};

export default Input_suggest;
////////////////////////