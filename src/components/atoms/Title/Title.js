import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const TITLE_MODIFIER = {
  big: ({ theme }) => `
    font-size: ${theme.size.l};
  `,
  xsmal: ({ theme }) => `
  font-size: ${theme.size.xs};
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

const Title = styled.span`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.color.base};
  font-weight: ${props => props.theme.weight.base};
  ${applyStyleModifiers(TITLE_MODIFIER)};
`;

export default Title;
