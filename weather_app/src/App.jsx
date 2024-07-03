import { useState } from 'react'
import axios from 'axios'
import './App.css'

import SearchInput from './components/SearchInput'
import WeatherInfo from './components/WeatherInfo'
import WeatherDetails from './components/WeatherDetails'

function App() {

  const [data, setData] = useState([])
  const [data_2, setData2] = useState({})
  const [location, setLocation] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')

  const geocoding = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=`

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      try {
        const geocodeResponse = await axios.get(geocoding);
        if (geocodeResponse.data && geocodeResponse.data.length > 0) {
          const { lat, lon } = geocodeResponse.data[0];
          setData(geocodeResponse.data);
          setLat(lat);
          setLon(lon);
          
          const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;
          const weatherResponse = await axios.get(weatherUrl);

          if (weatherResponse.data) {
            setData2(weatherResponse.data);
          } else {
            console.error('No weather data found for the specified location');
          }
        } else {
          console.error('No data found for the specified location');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLocation('');
    }
  };

  return (
    <>
      <h1>Weather App</h1>
      <SearchInput location={location} setLocation={setLocation} searchLocation={searchLocation}/>
      
      <WeatherInfo data={data} data_2={data_2}/>
  
      <WeatherDetails data_2={data_2}/>
      
    </>
  )
}

export default App
