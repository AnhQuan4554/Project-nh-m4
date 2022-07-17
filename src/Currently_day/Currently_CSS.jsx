import styled from 'styled-components'

export const S_container = styled.div`
   width :100% ;
   
   `
export const S_headerCurrently = styled.div`
    background-color: #286661; 
    width: 800px;
    height: 170 px;
    margin-left: 165px;
    margin-top:15px;
    
`
export const S_location = styled.div`
    display: flex;
    align-items: center;
   margin-left: 20px;

    .location_name{
        font-size: 24px;
        color: #fff;
        margin-right: 10px;
    }
    .curently_hour{
        font-size: 20px;
        color: #dcc9c9;
    }

`;

export const S_contentCurrently = styled.div`
   margin-left: 20px;
   width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .content_dedicate{

        .tempCurrently{
            display: flex;
            align-items: center;
                h1{
                    font-size: 60px;
                    color: #fff;
                }
        }
        .content_bonus{
            
        }
    }
    .header_img{
        position: absolute;
        
        right: 20%;
        img{
            width: 200px;
        }
    }
`
