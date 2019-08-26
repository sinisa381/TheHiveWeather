import React, { useContext } from 'react'

import { Flex as FlexRebass } from 'rebass'
import { theme } from '../globals'

import styled from 'styled-components'
import { Card as CardRebass } from 'rebass'
import Card from './card'
import { WeatherContext } from '../../context'

export default ({ city }) => {
  const { state } = useContext(WeatherContext)
  console.log(state)
  return (
    <CardRebass height={130}>
      <Flex width={'100%'} alignItems='flex-end' height='100%'>
        {state &&
          state.map((item, i) => {
            return (
              <div key={i}>
                <Card {...item} key={i} city={city} />
              </div>
            )
          })}
      </Flex>
    </CardRebass>
  )
}

const Flex = styled(FlexRebass)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors['dark-blue']};
    opacity: 0.2;
    z-index: 0;
  }
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(4px);
    filter: saturate(2) contrast(1);
  }
`
