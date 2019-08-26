import { getDay } from 'date-fns'
import axios from 'axios'
function myDate(numb) {
  const a = getDay(new Date(numb))
  const weekdays = new Array(7)
  weekdays[0] = 'SUN'
  weekdays[1] = 'MON'
  weekdays[2] = 'TUE'
  weekdays[3] = 'WED'
  weekdays[4] = 'THU'
  weekdays[5] = 'FRI'
  weekdays[6] = 'SAT'
  const r = weekdays[a]
  return r
}
const dayOfTheWeek = dt => {
  return myDate(dt)
}
export const getUVIndex = (lat, lon, setUV) => {
  return axios
    .get(
      `/uvi/forecast?appid=${
        process.env.REACT_APP_WEATHER_2
      }&lat=${lat}&lon=${lon}&cnt=7`
    )
    .then(res => {
      let arr = []
      res.data.map(item => {
        arr.push(item.value)
      })
      setUV(arr)
    })
    .catch(err => console.log(err))
}
export const getWeatherData = (lat, lon, setState) => {
  return axios
    .get(
      `/forecast?lat=${lat}&lon=${lon}&appid=${
        process.env.REACT_APP_WEATHER_2
      }&units=metric&cnt=7`
    )
    .then(response => {
      let arr = []
      response.data.list.map(item => {
        const { humidity, pressure, temp } = item.main
        const { speed, deg } = item.wind
        const { icon } = item.weather[0]
        let time = item.dt_txt
        time = time.replace(/\s+/g, 'T')
        arr.push({
          day: dayOfTheWeek(time),
          humidity,
          temp,
          speed,
          deg,
          icon,
          pressure
        })
      })
      setState(arr)
    })
    .catch(err => console.log(err))
}
