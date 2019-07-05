import { css } from 'styled-components';

/*
  Apply styled above a certain breakpoint
  Used like:
  ${above.md`
    ...styles
  `}
*/

export const size = {
  sm: 400,
  md: 750,
  lg: 1040,
};

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
