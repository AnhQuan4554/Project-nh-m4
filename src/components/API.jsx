import React, { useEffect, useState } from 'react'

// const fetchForecast = () => {
//     fetch('api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=7929f327fc4a780215bc2a5b14f3fe24')
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch ((error) => console.error(error));
//   };
//   fetchForecast();

const API = () => {
  const [date, setDate] = useState('')
  const fetchForecast = () => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=7929f327fc4a780215bc2a5b14f3fe24')
    .then((response) => response.json())
    .then((data) => setDate(data))
    .catch ((error) => console.error(error));
  };
  useEffect(() => {
    fetchForecast();;
  }, []);
  console.log(date);
  return (
    <>
        {date && date.map((date, index) => (
              <div key={index}>{date[0].list[0]}</div>
            ))}
    </>
  )
}

export default API