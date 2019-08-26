import React, { useState } from 'react'
import { setIcon } from '../SVG'
import styled from 'styled-components'
import { theme } from '../globals'
import { Flex as FlexRebass } from 'rebass'
import { Text } from '../globals/shared'
import SVG from '../SVG'

const Card = ({ city, day, temp, icon }) => {
  console.log(icon)
  const [hover, setHover] = useState(false)
  const bg = city[0].name

  return (
    <Flex
      flexDirection='column-reverse'
      justifyContent='flex-start'
      width='100%'
    >
      <FlexItem
        justifyContent='space-around'
        alignItems='center'
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        hover={hover}
        color={bg}
      >
        <StyledSVG hover={hover}>
          <SVG icon={setIcon(icon)} />
        </StyledSVG>
        <Deg hover={hover}>
          <Text>{Math.round(temp)}&deg;</Text>
        </Deg>
        <Absolute>
          <Text fontSize={1} color={theme.colors.whites[7]} textAlign='center'>
            {day}
          </Text>
        </Absolute>
      </FlexItem>
    </Flex>
  )
}

export default Card

const StyledSVG = styled.div`
  transition: all 0.2s ease;
  padding-top: 10px;
  margin-top: ${props => (props.hover ? '-25px' : '-10px')};
  svg {
    fill: black;
    width: 57.5px;
    height: 60px;
    .st0 {
      transition: all 0.2s;
      fill: ${props =>
        props.hover ? theme.colors.whites[10] : theme.colors.whites[8]};
    }
  }
`
const FlexItem = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 100;
  transition: padding 0.2s cubic-bezier(0.9, 2.34, 0.61, 0.9);
  text-align: center;
  padding-top: 0px;
  height: 130px;
  &:hover {
    padding-top: 15px;
    background: linear-gradient(
      to bottom,
      ${props =>
        props.color === 'beograd'
          ? ' rgba(134,253,232,1),rgba(172,182,229,.7)'
          : 'rgba(229, 193, 0, 1)25%,rgba(238, 230, 180, .7)70%,rgba(227, 210, 157, .9)90% '}
    );
  }
`

const Deg = styled.div`
  transition: margin-top 0.1s, font-size 0.2s ease;
  margin-top: ${props => (props.hover ? '-8px' : '-5px')};
  font-size: ${props => (props.hover ? '1.2rem' : '1rem')};
`
const Absolute = styled.div`
  position: absolute;
  padding-bottom: 8px;
  bottom: 0;
  left: 0;
  right: 0;
`

const Flex = styled(FlexRebass)`
  position: relative;
  overflow: hidden;
`
