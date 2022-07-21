import React from 'react'
import styled from 'styled-components'
const Input = ({ placeholder, type = "text", onChange, className, value }) => {
    return (
        <SInput>
            <input value={value} className={className} type={type} placeholder={placeholder} onChange={onChange} />
        </SInput>
    )
}

export default Input

const SInput = styled.div`
display: flex;
padding: 5px;
margin-top: 20px;
input{
    border-bottom: 2px solid #e0d3d3;
    border-top: none;
    border-left: none;
    border-right: none;
    &:focus{
        outline: none;
    }
    &::placeholder {
        color: #e6e1e1;
        font-weight: bold;
    }
    padding: 8px;
     background-color: #00B4FE;
    color: white;
::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
   position: absolute;
    width: 20px;
    height: 20px;
    border-width: thin;
}
}
`;