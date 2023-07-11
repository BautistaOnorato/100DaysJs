import { useState } from "react"
import { findWeather } from "../service/getWeather"

const useWeather = () => {
  const [weather, setWeather] = useState(null)

  const getWeather = async (city) => {
    try {
      const newWeather = await findWeather(city)
      setWeather(newWeather)
    } catch (err) {
      setWeather(404)
    }
  }

  return { weather, getWeather }
}

export default useWeather