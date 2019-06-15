/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import Logo from './Logo';

storiesOf('atoms/Logo', module)
  .add('default', () => <Logo />)
  .add('hasText', () => <Logo hasText />);
