import React from 'react'
import { theme } from '../globals'
import { Text } from 'rebass'
import styled, { keyframes } from 'styled-components'

const City = ({ cities, handler, hovering }) => {
  return (
    <React.Fragment>
      <div>
        {cities.map((city, i) => {
          if (!city.active && hovering) {
            return (
              <DropdownText
                key={i}
                onClick={handler}
                hover={hovering}
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
              </DropdownText>
            )
          }
        })}
      </div>
    </React.Fragment>
  )
}

export default City

const dropdownAnimation = keyframes`
0% {
  margin-top:-30px;
  opacity:0;
}
100%{
  margin-top:0px;
  opacity:1;
}
`
const DropdownText = styled(Text)`
  transition: all 0.3s ease;
  animation: ${dropdownAnimation} 0.3s ease;
  opacity: ${props => (props.hover ? 1 : 0)};
  display: ${props => (props.hover ? 'block' : 'none')};
`
