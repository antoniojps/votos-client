import styled from "styled-components"
import { applyStyleModifiers } from 'styled-components-modifiers'

const TITLE_MODIFIER = {
  big: ({ theme }) => `
    font-size: ${theme.size.l};
  `,
  small: ({ theme }) => `
    font-size: ${theme.size.s};
  `,
  medium: ({ theme }) => `
    font-size: ${theme.size.ml};
  `,
  bold: ({ theme }) => `
    font-weight: ${theme.weight.bold};
  `,
  light: ({ theme }) => `
    font-weight: ${theme.weight.light};
  `,
  normal: ({ theme }) => `
    font-weight: ${theme.weight.normal};
  `
}

const Title = styled.span`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.color.base};
  ${applyStyleModifiers(TITLE_MODIFIER)};
`

export default Title

