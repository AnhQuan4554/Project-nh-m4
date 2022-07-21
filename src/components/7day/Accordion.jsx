import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AirIcon from '@mui/icons-material/Air';
import Styled from 'styled-components';
import TodayIcon from '@mui/icons-material/Today';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [api, setApi] = useState('')
  // const [temp,setTemp] = useState('');
  // const fetchForecast = () => {
  //   fetch('https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=7929f327fc4a780215bc2a5b14f3fe24')
  //   .then((response) => response.json())
  //   .then((data) => setTemp(data))
  //   .catch ((error) => console.error(error));
  // };
  useEffect(() => {
    fetchForecast();;
  }, []);  // đoạn này đẻ truyền thêm tên địa điểm vào


  useEffect(() => {
    if(api){
          console.log(api,'đây là API nhé')
  
    };;
  }, [api])

  const fetchForecast = async () => {
    try {
      const res = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=7929f327fc4a780215bc2a5b14f3fe24');
      const data = await res.json();

      setApi(data);
    } catch (error) {
      console.log(error)
    }
  }

  // const temp = () => {
  //   return api.list && api.list.map((list, index) => <span key={index}>{list.main.temp}</span>)
  // }
  const firstDayTemp = () => {
    if(api){
      return (
        <><strong>{Math.round(api.list[0].main.temp_max - 280)}</strong>/{Math.round(api.list[0].main.temp_min - 280)}</>
      )
    }
  }

  // const firstDayRain = () => {
  //   if(api){
  //     return (
  //       // api.list[0].rain
  //     )
  //   }
  // }
  // Hôm nay | {printDay}/{printMonth +1} |
  // <DeviceThermostatIcon />{firstDayTemp()}
 
  let days = ['Chủ nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy'];
  let now = new Date();


  let printDay = new Date().getDate();
  let printMonth = new Date().getMonth();

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <S_weatherBar>
        <div className='box'>
          <div className='left-side'>Hôm nay <TodayIcon fontSize='small' />{printDay}/{printMonth +1} <DeviceThermostatIcon />{firstDayTemp()}</div>
          <div className="center"><ThunderstormIcon /> </div>
          <div className='right-side'><AirIcon /></div>
        </div>
        </S_weatherBar>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
          
          </Typography>
        </AccordionDetails> */}
      </Accordion>

          {days.map((iteam,index)=>(
                  // <div>{ index+now.getDay()+1 <=6 ? days[index+now.getDay()+1]:days[index+now.getDay()+1-7]} </div>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>
            <span className="box-2"><span>{index+now.getDay()+1 <=6 ? days[index+now.getDay()+1]:days[index+now.getDay()+1-7]} |
             {printDay + 1}/{printMonth +1}</span></span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>


          ))}

    </>

  );
}

const S_weatherBar = Styled.div`
  .box{
    width: 243%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
  }

  .left-side{
    width: 30%
    height: 100%;
    /* border: 1px solid black; */
  }
  .right-side{
    width: 30%
    height: 100%;
    /* border: 1px solid black; */
  }
`




