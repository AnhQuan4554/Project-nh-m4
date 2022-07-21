import React from 'react'
import styled from 'styled-components'
const Button = ({ text, className }) => {
    return (
        <SButton className={className}>{text}</SButton>
    )
}

export default Button
const SButton = styled.button`
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
`;