import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { S_wrapFiveDay } from "./S_FiveDay";
import { Collapse } from "antd";
import Nav from "../../pages/Home/Header/Nav";
import EachDay from "./EachDay";
import Extra_EachDay from "./Extra_EachDay";
const FiveDay = ({contentApi}) => {
  const { Panel } = Collapse;
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  
  const arrDay = [0,1,2,3,4,5,6];
console.log(contentApi,'five day')
  return (
    <S_wrapFiveDay>
      <Collapse defaultActiveKey={['0']} expandIconPosition='end' bordered={false} className='Collapse' >
        { contentApi && contentApi.list && arrDay.map((i, index) => (
          <>
          <Panel className="Panel"  header={ <EachDay index={index} contentApi={contentApi}  />}  key={index}>
            <Extra_EachDay index={index} contentApi={contentApi} />
          </Panel>
          </>
        ))}

  
      </Collapse>

{/* 
      {arrDay.map((i,index)=>(
        <>
          <EachDay index={index} contentApi={contentApi} />
        </>
      ))} */}
    </S_wrapFiveDay>
  );
};

export default FiveDay;
