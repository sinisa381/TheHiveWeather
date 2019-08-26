import { keyframes, css } from 'styled-components'
const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`
export const waveAnimation = length =>
  css`
    animation: ${wave} 30s linear infinite;
  `
const cssTricks = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

export const tricks = () =>
  css`
    animation: ${cssTricks} 30s linear infinite;
  `
