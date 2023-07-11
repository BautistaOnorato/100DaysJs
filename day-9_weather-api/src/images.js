import cloud from './assets/cloud.png'
import mist from './assets/mist.png'
import rain from './assets/rain.png'
import storm from './assets/storm.png'
import notFound from './assets/404.png'
import snow from './assets/snow.png'
import clear from './assets/clear.png'

export const index = {
  cloud, mist, rain, storm, snow, notFound, clear
}

export const getImage = (condition) => {
  if (condition.includes("snow")) {
    return snow
  }
  if (condition.includes("thunder")) {
    return storm
  }
  if (condition.includes("sunny") || condition.includes("clear")) {
    return clear
  }
  if (condition.includes("cloud")) {
    return cloud
  }
  if (condition.includes("rain") && !condition.includes("freezing")) {
    return rain
  }
  if (condition.includes("mist") || condition.includes("fog")) {
    return mist
  }
  return notFound
}