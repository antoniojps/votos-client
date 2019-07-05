/* eslint-disable max-len */
import { rem } from 'polished';

const font = {
  base: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
};

const color = {
  base: '#000',
  baseLighter: '#999999',
  baseInverse: '#FFFFFF',
  primary: '#0076FF',
  primaryLighter: '#A3C5FB',
  border: '#F1F3F4',
  bg: '#FFF',
  bgInverse: '#181C21',
  danger: '#FB6D77',
  blue: '#3273DC',
  purple: '#B86BFF',
  warning: '#F5874A',
  success: '#40CB89',
  yellow: '#FFDD57',
  star: '#FFDD57',
  twitter: '#5BCFFF',
  grey: '#F5F6F8',
};

const value = {
  borderRadius: '8px',
};

const weight = {
  light: '200',
  base: '400',
  bold: '700',
};

const size = {
  base: rem('16px'),
  xxxs: rem('12px'),
  xxs: rem('14px'),
  xs: rem('16px'),
  ls: rem('18px'),
  s: rem('20px'),
  sm: rem('24px'),
  m: rem('28px'),
  ml: rem('42px'),
  l: rem('48px'),
  xl: rem('60px'),
};

const spacing = {
  base: rem('16px'),
  xxxs: rem('4px'),
  xxs: rem('8px'),
  xxms: rem('10px'),
  xs: rem('12px'),
  xms: rem('15px'),
  s: rem('20px'),
  sm: rem('22px'),
  ms: rem('24px'),
  m: rem('30px'),
  l: rem('48px'),
  xl: rem('60px'),
  xxl: rem('108px'),
};

const grid = {
  sm: 400,
  md: 750,
  lg: 1040,
};

export const theme = {
  font,
  weight,
  color,
  spacing,
  size,
  value,
  grid,
};
