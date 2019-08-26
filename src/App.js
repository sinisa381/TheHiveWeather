import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Details from './components/details'

import Weather from './components/weather'
import Week from './components/week'
import Layout from './components/layout'
import { WeatherContext } from './context'

function App() {
  const { state, uv, apiCall, data } = useContext(WeatherContext)
  const { lat, lon } = data.cities[0]
  useEffect(() => {
    apiCall(lat, lon)
  }, [])

  return (
    <div className='App'>
      <Layout>
        <Flex>
          <Box>
            <Weather data={state[0]} />
            <Spacer my='8px' />
            <Details data={state[0]} uv={uv[0]} />
          </Box>
          <Spacer mx='4px' />
          <Week data={state} uv={uv} />
        </Flex>
      </Layout>
    </div>
  )
}

export default App

const Spacer = styled(Box)``
