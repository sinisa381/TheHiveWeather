import styled from 'styled-components'
import { waveAnimation } from './animation'
const InnerWave = styled.div`
  position: relative;
  height: 100%;
  svg {
    width: 100%;
    /* height: 30vh; */
    fill: #242424;
    fill: ${props => props.fill};
  }
  path {
    ${waveAnimation('20s')};
  }
`
export default InnerWave
