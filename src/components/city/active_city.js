import React from 'react'
import styled, { keyframes } from 'styled-components'
import { theme } from '../globals'
import { Flex, Text } from 'rebass'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const ActiveCity = ({ cities, handler, hovering }) => {
  const arrows = type => {
    if (type) {
      if (hovering) {
        return <ArrUp />
      } else {
        return <ArrDown />
      }
    }
  }
  return (
    <div>
      {cities.map((city, i) => {
        if (city.active) {
          return (
            <Flex key={i} alignItems='center'>
              <Text
                onClick={e => handler(e)}
                fontSize='5'
                fontFamily='roboto'
                color={theme.colors.whites[11]}
                fontWeight={600}
                style={{
                  textTransform: 'uppercase',
                  textShadow: '1px 1px 1px rgba(0,0,0,.3)'
                }}
              >
                {city.name}
              </Text>
              {arrows(city.active)}
            </Flex>
          )
        }
      })}
    </div>
  )
}

export default ActiveCity

const arrowAnim = keyframes`
0% {
  opacity:0;
}
100%{
  opacity:1;
}
`
const ArrUp = styled(FaAngleUp)`
  transition: opacity 0.5s ease;
  animation: ${arrowAnim} 0.5s ease;
  fill: ${theme.colors.whites[11]};
  padding-left: 5px;
`
const ArrDown = styled(FaAngleDown)`
  transition: opacity 0.5s ease;
  animation: ${arrowAnim} 0.5s ease;
  fill: ${theme.colors.whites[11]};
  padding-left: 5px;
`
