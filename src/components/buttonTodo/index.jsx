import React from 'react'
import styled from 'styled-components'
const Button_todo = ({ text, className,handleClick_show }) => {

    return (
        <SButton onClick={handleClick_show} className={className}>{text}</SButton>
    )
}

export default Button_todo
const SButton = styled.button`
min-width: 200px;
color: #6CD0F8;
padding: 8px 32px;
border-radius: 4px;
cursor: pointer;
color: #6BD2EB;
background-color: white;
margin: 0 auto;
margin-top: 16px;
display: block;
border: none;
    &:hover{
        transition: 0.5s;
        color: #e7a8a8;
    }
 
`;