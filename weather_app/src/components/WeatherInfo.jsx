import React from 'react'

const WeatherInfo = ({data, data_2}) => {
  return (
    <>
        <div className="mainContainer">
            {data[0] ? (
              <>
                <span>{data[0].name}</span>
              </>
          ) : (
            <p></p>
          )}

          {data_2.main && (
          <div>
            <h2>{data_2.main.temp}°C</h2>
            <span className='weather-condition'>{data_2.weather[0].description}</span>
          </div>
        )}
        {!data_2.main && (
          <p></p>
        )}
        </div>
    </>
  )
}

export default WeatherInfo