// .storybook/YourTheme.js

import { create } from '@storybook/theming';
import logo from './Neto.svg';

export default create({
  base: 'dark',

  colorPrimary: 'whitw',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#151414',
  appContentBg: '#5a5656',
  appBorderColor: 'white',
  appBorderRadius: 2,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: '#5a5656',

  // Toolbar default and active colors
  barTextColor: '#5a5656',
  barSelectedColor: 'white',
  barBg: 'black',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 8,

  brandTitle: 'Neto Components',
  brandUrl: '#',
  brandImage: logo,
});
