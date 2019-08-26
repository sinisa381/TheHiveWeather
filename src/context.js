import React, { useState } from 'react'
import { getUVIndex, getWeatherData } from './components/misc'
import imageBg from './assets/images/bg.jpg'
import imageNs from './assets/images/ns.jpg'

const WeatherContext = React.createContext()

const Context = props => {
  const [state, setState] = useState([])
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState({
    cities: [
      {
        name: 'beograd',
        img: imageBg,
        active: true,
        lat: 44.7866,
        lon: 20.4489
      },
      {
        name: 'novi sad',
        img: imageNs,
        active: false,
        lat: 45.2671,
        lon: 19.8335
      }
    ]
  })
  const [uv, setUV] = useState({})
  const apiCall = (val1, val2) => {
    getWeatherData(val1, val2, setState)
    getUVIndex(val1, val2, setUV)
    setToggle(false)
  }
  return (
    <WeatherContext.Provider
      value={{
        state,
        setState,
        uv,
        setUV,
        apiCall,
        data,
        setData,
        toggle,
        setToggle
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  )
}

export default Context
export { WeatherContext }
