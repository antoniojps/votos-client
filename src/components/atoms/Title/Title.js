import styled from "styled-components"
import { applyStyleModifiers } from 'styled-components-modifiers'

const TITLE_MODIFIER = {
  big: () => `
    font-size: ${props => props.theme.size.l};
  `,
  small: () => `
    font-size: ${props => props.theme.size.xs};
  `,
  medium: () => `
    font-size: ${props => props.theme.size.base};
  `,
  bold: () => `
    font-weight: ${props => props.theme.weight.bold};
  `
}

export default styled.h1`
    font-size: ${props => props.theme.size.base};
    margin: 0;
    padding: 0;
    ${applyStyleModifiers(TITLE_MODIFIER)};
`