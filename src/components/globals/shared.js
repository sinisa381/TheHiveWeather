import styled from 'styled-components'
import theme from './theme'
import { Text as RebassText } from 'rebass'

export const Text = styled(RebassText)`
  font-family: ${theme.fonts.roboto};
  color: ${theme.colors.whites[11]};
`
