import React from 'react'
import { theme } from '../globals'
import styled, { css } from 'styled-components'
import { Flex, Box, Card as CardBox } from 'rebass'
import { Text } from '../globals/shared'

export default ({ data, uv }) => (
  <Bck width={220} height={130}>
    <CardContainer>
      <Box py='2'>
        <Flex justifyContent='space-around' flexWrap='wrap'>
          <Box width={1 / 2} pb='3'>
            <Text fontSize={3} pb='1'>
              {data && data.humidity}%
            </Text>
            <Text fontSize={1} color={theme.colors.whites[7]}>
              Humidity
            </Text>
          </Box>
          <Box width={1 / 2} pl='3'>
            <Text fontSize={3} pb='1'>
              {data && Math.floor(data.pressure)}
            </Text>
            <Text fontSize={1} color={theme.colors.whites[7]}>
              Pressure
            </Text>
          </Box>
          <Box width={1 / 2}>
            <Text fontSize={3} pb='1'>
              {uv && uv}
            </Text>
            <Text fontSize={1} color={theme.colors.whites[7]}>
              UV index
            </Text>
          </Box>
          <Box width={1 / 2} pl='3'>
            <Text fontFamily='roboto' pb='1'>
              {data && data.speed}
            </Text>
            <Text fontSize={1} color={theme.colors.whites[7]}>
              Speed
            </Text>
          </Box>
        </Flex>
      </Box>
    </CardContainer>{' '}
  </Bck>
)

const blue = css`
  background: #314755;
  background: -webkit-linear-gradient(30deg, #26a0da, #314755);
  background: linear-gradient(to left, #26a0da, #314755);
`
const Bck = styled(CardBox)`
  ${blue}
`
const CardContainer = styled.div`
  padding: 0.4rem 1.2rem;
  margin: 0 auto;
`
