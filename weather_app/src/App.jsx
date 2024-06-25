import { useState } from 'react'
import axios from 'axios'
import './App.css'

import SearchInput from './components/SearchInput'
import WeatherInfo from './components/WeatherInfo'
import WeatherDetails from './components/WeatherDetails'

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState()

  const geocoding = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid={API key}`

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=de48ddb9761342006c0215fa0421b9ea`

  return (
    <>
      <h1>Weather App</h1>
      <SearchInput/>
      <WeatherInfo/>
      <WeatherDetails/>
      
    </>
  )
}

export default App
