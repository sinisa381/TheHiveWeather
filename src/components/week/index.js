import React, { useState, useContext } from 'react'
import { format } from 'date-fns'
import { theme } from '../globals'
import styled from 'styled-components'
import { Box, Text } from 'rebass'
import Picture from './picture'
import CardBlock from './card_block'
import City from '../city/city'
import ActiveCity from '../city/active_city'
import { WeatherContext } from '../../context'

export default props => {
  const { apiCall, data, setData } = useContext(WeatherContext)

  const filterCity = () => {
    return data.cities.filter(city => city.active)
  }

  const dataHandlerActive = e => {
    const thesity = e.target.innerText.toLowerCase()
    const newState = { ...data }
    newState.cities = [...data.cities]
    newState.cities.forEach(city => {
      if (city.name === thesity) {
        city.active = true
        apiCall(city.lat, city.lon)
      } else {
        city.active = false
      }
    })
    setData(newState)
  }

  const [hovering, setIsHovering] = useState(false)

  return (
    <div>
      <Picture cities={data.cities}>
        <Box flex='1'>
          <Box style={{ paddingLeft: 25, paddingTop: 17 }}>
            <Dropdown
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <ActiveCity
                cities={data.cities}
                handler={dataHandlerActive}
                hovering={hovering}
              />
              <City
                cities={data.cities}
                handler={dataHandlerActive}
                hovering={hovering}
              />
            </Dropdown>
            <MonthText
              hover={hovering}
              fontSize='2'
              fontFamily='roboto'
              color={theme.colors.whites[9]}
              py='2'
              fontWeight={500}
            >
              {format(new Date(), 'LLLL dd')}
            </MonthText>
          </Box>
        </Box>
        <CardBlock city={filterCity()} />
      </Picture>
    </div>
  )
}

const Dropdown = styled(Box)`
  cursor: pointer;
`

const MonthText = styled(Text)`
  text-transform: uppercase;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  opacity: ${props => (props.hover ? 0 : 1)};
`
