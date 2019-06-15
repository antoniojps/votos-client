/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import Text from './Text';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

storiesOf('atoms/Text', module)
  .add('default', () => <Text>{loremIpsum}</Text>)
  .add('big', () => <Text big>{loremIpsum}</Text>);
