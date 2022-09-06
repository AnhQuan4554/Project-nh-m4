import styled from "styled-components";
export const S_wrapFiveDay = styled.div`
  width: 100%;

  .Collapse {
  }
  .Panel {
    /* align-items: center; */
    .ant-collapse-header {
      // cái class này có sẵn trong ant design nên phải inspec mới xem đc
      align-items: center;
    }
  }
`;
// Css cho Item
///////////////////////
export const S_itemFiveDay = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  .main_infor {
    width: 60%;
    display: flex;
    align-items: center;
    font-size: 18px;
    .main_infor_item {
      margin-left: 30px;
    }
   .itemDay{
    min-width: 76px;
   }
    .item_describe {
      display: flex;
      align-items: center;
      margin-right: 20px;
      span {
        margin-left: 8px;
      }
    }
  }
.extra_infor{
    /* margin-left: 200px; */
    display: flex;
    font-size: 18px;
    .extra_infor_item{
        display: flex;
        align-items: center;
        span{
            margin-left: 4px;
        }
    }
    .item_wet{
        margin-left: 20px;
    }
}


`;

export const S_Extra_EachDay = styled.div`
/* background-color: #bbb5b5; */
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
h3.time{
    font-size: 30px;
    margin-bottom:0px;
    text-align: center;
}
.header_infor{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}
.tableInfor{
    border: 1px solid #e4d7d7;
    padding: 10px;
    .tableInfor_item{
        display: flex;
    align-items: center;
    justify-content: space-between;
    &:first-child{
        margin-bottom: 20px;
    }
    .extra_infor_item{
        font-size: 16px;
        display: flex;
    align-items: center;
    span{
        margin-left: 10px;
    }
    }
    }
}

`