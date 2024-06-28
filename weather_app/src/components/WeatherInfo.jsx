import React from 'react'

const WeatherInfo = ({data}) => {
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
            <h2>18°C</h2>
            <span>Cloudy</span>
        </div>
    </>
  )
}

export default WeatherInfo