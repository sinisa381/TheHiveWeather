import styled from 'styled-components'
const WaveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  bottom: ${props => props.bottom};
  width: 100%;
  transform: matrix(1, 0, 0, 1, 0, 119);
  transform: ${props =>
    `matrix(${props.val1}, ${props.val2}, ${props.val3}, ${props.val4}, 0, 0)`};
`
export default WaveWrapper
