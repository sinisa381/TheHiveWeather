import React from 'react'
import { Card } from 'rebass'
import styled from 'styled-components'
import bg from '../../assets/images/bg.jpg'
import Fade from 'react-reveal/Fade'

export default ({ children, cities }) => {
  return (
    <>
      {cities.map((city, i) => {
        if (city.active) {
          return (
            <Fade key={i}>
              <Card height={345 + 8}>
                <Img pic={city.img}>{children}</Img>
              </Card>
            </Fade>
          )
        }
      })}
    </>
  )
}

const Img = styled.div`
  height: 100%;
  background: url(${bg});
  background: url(${props => (props.pic ? props.pic : bg)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`
