import React from 'react'
import { theme } from './components/globals'
import styled from 'styled-components'
import { Box as BoxR } from 'rebass'

const Flexbox = props => {
  return (
    <div>
      <Container>
        <Flex>
          <Spacer />
          <Flex2>
            <Box px='3' py='3' bg='red' />
            <Box px='3' py='3' bg='green' />
            <Box px='3' py='3' bg='yellow' />
            <Box px='3' py='3' bg='pink' />
            <Box px='3' py='3' bg='tomato' />
          </Flex2>
        </Flex>
      </Container>
    </div>
  )
}

export default Flexbox

const Container = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  width: 800px;
  height: 400px;
  background-color: ${theme.colors.blue};
`
const Spacer = styled.div`
  flex-grow: 1;
  width: 30px;
  height: 30px;
  background-color: navy;
`

const Flex = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  justify-content: center;
  flex-direction: column;
`
const Flex2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const Box = styled(BoxR)`
  :hover {
    background-color: black;
    height: 100px;
  }
`
