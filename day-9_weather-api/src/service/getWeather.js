const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const findWeather = async (city) => {
  if (city === '') return null

  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    const weather = await response.json()

    return {
      condition: weather.current.condition.text,
      humidity: weather.current.humidity,
      wind: weather.current.wind_kph,
      celcius: weather.current.temp_c
    };

  } catch (err) {
    return 404
  }
}

