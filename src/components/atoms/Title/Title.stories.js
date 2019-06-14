/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import Title from './Title';

storiesOf('Title', module).add('default', () => <Title>Hello title</Title>);
