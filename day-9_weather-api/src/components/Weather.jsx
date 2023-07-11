/* eslint-disable react/prop-types */
import { MdWaves } from 'react-icons/md'
import { BiWind } from 'react-icons/bi'
import { getImage, index } from '../images'

const Weather = ({ weather }) => {
  return (
    <div className="weather-container">
      {
        weather === 404 ? (
          <>
            <img src={index.notFound} alt="weather not found" className='not-found' />
            <p className='text-not-found'>Could not find weather</p>
          </>
        ) : (
          <>
            <img src={weather ? getImage(weather.condition) : ''} alt="weather img" />
            <div className="main-info">
              <p className="temp">{weather?.celcius} <span>ºC</span></p>
              <p>{weather?.condition}</p>
            </div>
            <div className="extra-info">
              <div className="extra">
                <MdWaves className='extra-icon' />
                <div className="extra-text">
                  <p className="extra-value">{weather?.humidity}%</p>
                  <p className="extra-title">Humidity</p>
                </div>
              </div>
              <div className="extra">
                <BiWind  className='extra-icon' />
                <div className="extra-text">
                  <p className="extra-value">{Math.round(weather?.wind)}Km/h</p>
                  <p className="extra-title">Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Weather