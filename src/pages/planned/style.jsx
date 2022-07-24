import styled from "styled-components";

export const SPlanned = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
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
    margin-top: 32px;
    height: 50vh;
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
   height: 30vh;
   top: 12vh;
   overflow: scroll;
   overflow-x:hidden;
   ::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
} 
  
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
         
            .done{
                font-size: 14px;
                width: 75px;
                height: 26px;
                margin: auto;
                cursor: pointer;
                background-color: #36BE7C;
                border: none;
                border-radius: 16px;
                padding: 0px 16px;
                color: white;
                margin-right: 20%;
                &:hover{
                    background-color: red;
                    transition: 0.5s;
                }
            }
        }
        .content{
             width: 100%;
            font-size: 15px;
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