import React, { useContext } from 'react'
import { setIcon } from '../SVG'
import ReactTimeAgo from 'react-time-ago'
import { WeatherContext } from '../../context'

import styled, { keyframes, css } from 'styled-components'
import { theme } from '../globals'
import { Flex, Box, Card as CardBox } from 'rebass'
import SVG from '../SVG'
import { Text } from '../globals/shared'
import Chart from '../chart'
import { useSpring, animated } from 'react-spring'

const totalLength = 537.7671508789062
export default ({ data }) => {
  const { toggle, setToggle, apiCall, data: weatherData } = useContext(
    WeatherContext
  )
  const props3 = useSpring({
    config: { mass: 1, tension: 280, friction: 60 },
    from: {
      strokeDashoffset: toggle ? totalLength + 90 : 0,
      strokeWidth: toggle ? 8 : 0
    },
    reset: toggle
  })

  const rotateProps = useSpring({
    from: { transform: `${toggle ? 'rotate(0deg)' : 'rotate(360deg)'}` },
    reset: toggle
  })

  const animationHandler = () => {
    setToggle(true)
    setTimeout(() => {
      setToggle(false)
      if (weatherData.cities[0].active) {
        const { lat, lon } = weatherData.cities[0]
        apiCall(lat, lon)
      } else {
        const { lat, lon } = weatherData.cities[1]
        apiCall(lat, lon)
      }
    }, 500)
  }

  return (
    <Card height={215} bg={theme.colors.blue} width={220}>
      <Box px='3' py='3'>
        <Flex justifyContent='space-around'>
          <Box>
            <Text fontSize={5} pb='1'>
              {data && Math.floor(data.temp)}&deg;
            </Text>
            <Text fontSize={2} pb='1' fontWeight={500}>
              Sunny
            </Text>
          </Box>
          <Box />
          <Box color={theme.colors.whites[11]}>
            <WeatherSVG>{data && <SVG icon={setIcon(data.icon)} />}</WeatherSVG>
          </Box>
        </Flex>
      </Box>
      <RefreshInfo>
        <RefreshSVG color='blue' onClick={() => animationHandler()}>
          <animated.div style={rotateProps}>
            <SVG
              icon={
                'https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/AXnT-refresh.svg'
              }
            />
          </animated.div>
        </RefreshSVG>
        <Text fontSize={1} color={theme.colors.whites[8]}>
          Updated{' '}
          <Text
            fontSize={1}
            color={theme.colors.whites[11]}
            style={{ display: 'inline-block' }}
          >
            <ReactTimeAgo date={new Date()} />
          </Text>{' '}
        </Text>
      </RefreshInfo>
      <WaveWrapper>
        <StyledChart dash={props3} />
      </WaveWrapper>
    </Card>
  )
}

const Card = styled(CardBox)`
  position: relative;
  overflow: hidden;
  background: #e1eec3;
  background: -webkit-linear-gradient(
    30deg,
    ${theme.colors['light-yellow']},
    #e1eec3
  );
  background: linear-gradient(30deg, #10316b 30%, #00a8b5);
`

const wave = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`
const StyledChart = styled(Chart)`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 25em;
  .shape1 {
    fill: #20c1bd;
  }
  .line {
    fill: transparent;
    stroke: ${props =>
      props.transparent ? 'transparent' : theme.colors.whites[11]};
    stroke-width: 4px;
    stroke-dasharray: 50 ${totalLength};
    animation: ${wave ? wave : null} 1s ease-in;
  }
`
const RefreshInfo = styled(Flex)`
  position: absolute;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-bottom: 15px;
  bottom: 0;
  text-align: center;
  z-index: 10000;
`

const baseSvg = css`
  transition: all 0.2s ease;
  .st0 {
    transition: all 0.2s;
    stroke: ${theme.colors.whites[11]};
    stroke-width: 15px;
  }
`

const WeatherSVG = styled.div`
  ${baseSvg}
  margin-top: -20px;
  margin-right: -30px;
  svg {
    width: 87.5px;
    height: 80px;
  }
`
const RefreshSVG = styled.div`
  ${baseSvg}
  cursor:pointer;
  padding: 0 10px;
  svg {
    width: 15.5px;
    height: 15.5px;
    path {
      fill: ${theme.colors.whites[8]};
    }
  }
`
const WaveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: matrix(1, 0, 0, 1, 0, 119);
`
