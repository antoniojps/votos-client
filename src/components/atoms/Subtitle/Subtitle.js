import styled from "styled-components"
import { applyStyleModifiers } from 'styled-components-modifiers'

const SUBTITLE_MODIFIER = {
  big: ({theme}) => `
    font-size: ${theme.size.l};
  `,
  small: ({theme}) => `
    font-size: ${theme.size.s};
  `,
  medium: ({theme}) => `
    font-size: ${theme.size.m};
  `,
  bold: ({theme}) => `
    font-weight: ${theme.weight.bold};
  `,
  light: ({theme}) => `
    font-weight: ${theme.weight.light};
  `,
  normal: ({theme}) => `
    font-weight: ${theme.weight.normal};
  `
}

export default styled.h2`
    margin: 0;
    padding: 0;
    color: ${props => props.theme.color.baseLighter};
    ${applyStyleModifiers(SUBTITLE_MODIFIER)};
`
