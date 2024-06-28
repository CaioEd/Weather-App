import { useState } from 'react'
import axios from 'axios'
import './App.css'

import SearchInput from './components/SearchInput'
import WeatherInfo from './components/WeatherInfo'
import WeatherDetails from './components/WeatherDetails'

function App() {

  const [data, setData] = useState([])
  const [location, setLocation] = useState('')

  const geocoding = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=de48ddb9761342006c0215fa0421b9ea`

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=de48ddb9761342006c0215fa0421b9ea`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(geocoding)
        .then((response) => {
          if (response.data && response.data.length > 0) {
            setData(response.data);
            console.log(response.data[0].name);
            console.log(response.data[0].lat)
            console.log(response.data[0].lon)
          } else {
            console.error('No data found for the specified location');
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
      setLocation('');
    }
  }

  return (
    <>
      <h1>Weather App</h1>
      <SearchInput location={location} setLocation={setLocation} searchLocation={searchLocation}/>
      
      <WeatherInfo data={data}/>
  
      <WeatherDetails/>
      
    </>
  )
}

export default App
