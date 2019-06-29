import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const SUBTITLE_MODIFIER = {
  big: ({ theme }) => `
    font-size: ${theme.size.l};
  `,
  xsmall: ({ theme }) => `
    font-size: ${theme.size.xxxs};
  `,
  small: ({ theme }) => `
    font-size: ${theme.size.s};
  `,
  medium: ({ theme }) => `
    font-size: ${theme.size.m};
  `,
  bold: ({ theme }) => `
    font-weight: ${theme.weight.bold};
  `,
  light: ({ theme }) => `
    font-weight: ${theme.weight.light};
  `,
  colorInverse: ({ theme }) => `
    color: ${theme.color.baseInverse};
`
};

export default styled.h2`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.color.baseLighter};
  font-weight: ${props => props.theme.weight.base};
  font-size: ${props => props.theme.size.m};
  ${applyStyleModifiers(SUBTITLE_MODIFIER)};
`;
