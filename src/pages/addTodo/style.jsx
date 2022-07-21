import styled from "styled-components";

export const SAddTodo = styled.div`
display: flex;
justify-content: center;
margin-top: -150px;
height: 100vh;
Button{
    margin-top: 40px;
    &:hover{
        transition: 0.5s;
        color: #e7a8a8;
    }
}
Input{
    margin-left: 24px;
    width: 80%;
    margin-bottom: 8px;
    
    ::-webkit-calendar-picker-indicator {
        margin-left: 250px;
 
}
  
}
form{
    
    width: 100%;
    max-width: 350px;
    height: 70vh;
    background-color: #00B4FE ;
    color: #CEF0FF;
    border-radius: 8px;
    margin-top: 4%;
    
}
h1{
   color: whitesmoke;
   text-align: center;
   margin-top: 16px;
}
`;