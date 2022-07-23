import React from 'react'
import styled from 'styled-components';
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
const Header_withinLog = ({user,setCheckLogin}) => {
    
    // user && console.log(user,'thông tin trong header');
    let navigate = useNavigate();
    const handle_outSign=()=>{
        setCheckLogin(false)
        navigate("../Login", { replace: true });

    }
  return (
    <Header_notLog>
        <div className="inforUser">
            <div className="inforUser_avatar">
                <img src={user && user.photoURL} alt="" />
            </div>
            <div className="inforUser_name">
                <span>{user && user.displayName}</span>
            </div>
        </div>
        <div className="Logout">
            <button onClick={handle_outSign}>
                <span>Logout</span>
                
                <AiOutlineLogout style={{fontSize:`30px` ,marginLeft:`5px`,color:`red`}} />  
            </button>
        </div>
    </Header_notLog>
  )
}

export default Header_withinLog
export const Header_notLog = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
   
    .inforUser{
      
        height: 82px;
        width: 160px;
        position: relative;
        .inforUser_avatar{
           margin-left: 80px;
           transform: translateX(-50%);
            img{
                height: 35px;
                border-radius:50%;
                margin-bottom: 3px;

            }
        }
        .inforUser_name{
            span{
                font-size: 15px;
                color: #fff;
               
            }
        }
    }
    .Logout{
        flex: 1;
        display: flex;
        button{
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:  0 10px;
            background-color: #888;
            opacity: 0.7;
            &:hover{
                opacity: 1;
            }
        }
    }
`