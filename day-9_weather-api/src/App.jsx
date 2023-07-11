import { useState } from 'react'
import './App.css'
import FormCity from './components/FormCity'
import Weather from './components/Weather'
import useWeather from './hooks/useWeather'

function App() {
  const [city, setCity] = useState('') 
  const { weather, getWeather } = useWeather()

  const handleCity = (value) => {
    setCity(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city === '') return 
    const container = document.querySelector('.container')
    const form = document.getElementById('form-city')
    container.style.height = '80vh'
    form.style.height = '8%'
    getWeather(city)
  }

  return (
    <div className='container'>
      <FormCity city={city} handleCity={handleCity} handleSubmit={handleSubmit} />
      { weather !== null && <Weather weather={weather} /> }
    </div>
  )
}

export default App
