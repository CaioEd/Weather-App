import React from 'react'


const WeatherDetails = ({data_2}) => {
  return (
    <>
      <div className='weatherDetails'>
        {data_2.main && (
        <>
        <div className="details">
          <h3>{data_2.main.feels_like}</h3>
          <span>Feels like</span>
        </div>

        <div className="details">
          <h3>{data_2.main.humidity}%</h3>
          <span>Humidity</span>
        </div>

        <div className="details">
          <h3>{data_2.wind.speed}km/h</h3>
          <span>Winds</span>
        </div>
        </>
        )}
        {!data_2.main && (
          <p></p>
        )}
      </div>
    </>
    
  )
}

export default WeatherDetails