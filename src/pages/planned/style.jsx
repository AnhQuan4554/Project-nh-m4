import styled from "styled-components";

export const SPlanned = styled.div`
margin-top: -230px;
height: 100vh;
display: flex;
justify-content: center;
.header{
   
   position: absolute;
   width: 100%;
   top: 0;
    box-shadow: 0 10px 10px -10px;
    background-color: #00B4FE;
}
.container{
    border-radius: 16px;
    position: relative;
   
    height: 70vh;
    background-color: #FFFFFF;
  
}
.notification{
    opacity: 0.2;
    margin-top: 30%;
    font-size: 24px;
    text-align: center;
    margin-left: 16px;
    margin-right: 16px;
   
}
.content-container{
    width: 100%;
   position: absolute;
   top: 12vh;
   overflow: scroll;
   overflow-x:hidden;
   ::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
} 
    height: 50vh;
    margin-top: 16px;
    .circle{
        background-color: #00B4FE;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-left:4px ;
    }
    .content-item{
       width: 100%;
       margin-left: 8px;
       border-left: 3px solid #00B4FE ;
        .time{
             width: 100%;
            font-weight: bold;
            margin-left: 16px;
            display: flex;
            justify-content: space-between;
            button{
                margin: auto;
                background-color: #36BE7C;
                border: none;
                border-radius: 16px;
                padding: 6px 22px;
                color: white;
                margin-right: 20%;
            
                &:hover{
                    background-color: #07d371;
                    transition: 0.5s;
                    cursor: pointer;
                }
            }
        }
        .content{
             width: 100%;
            font-size: 14px;
            color: #aaa5a5;
            margin-left: 16px;
            width: 100%;
            max-width: 350px;
            border-bottom: 2px solid #dee3e6 ;
            padding-bottom: 8px;
          
        }
    }
}
`;