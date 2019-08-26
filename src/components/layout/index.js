import React from 'react'
import styled from 'styled-components'

export default ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 3rem;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 0.3) 0%,
    rgba(253, 187, 45, 0.3) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  padding: 6rem 4rem;
`
