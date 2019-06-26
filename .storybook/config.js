import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { ThemeProvider } from 'styled-components';
import { theme } from './../src/styles/theme';
import { GlobalStyleStorybook } from './../src/styles/GlobalStyle';

const StyledComponents = storyFn => (
  <ThemeProvider theme={theme}>
    <>
      {storyFn()}
      <GlobalStyleStorybook />
    </>
  </ThemeProvider>
);

addParameters({
  backgrounds: [
    {
      name: 'bg',
      value: theme.color.bg,
      default: true,
    },
    { name: 'bgInverse', value: theme.color.bgInverse },
  ],
});

addDecorator(StyledComponents);
addDecorator(withA11y);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};
configure(loadStories, module);
