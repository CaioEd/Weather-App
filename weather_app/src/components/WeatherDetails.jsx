import React from 'react'


const WeatherDetails = () => {
  return (
    <div className='weatherDetails'>
        <div className='details'>
            <h3>20°C</h3>
            <span>Feels Like</span>
        </div>

        <div className='details'>
            <h3>72%</h3>
            <span>Humidity</span>
        </div>
        <div className='details'>
            <h3>5 Km/h</h3>
            <span>Winds</span>
        </div>
    </div>
  )
}

export default WeatherDetails