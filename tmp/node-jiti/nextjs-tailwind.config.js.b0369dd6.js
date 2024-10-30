"use strict";var _theme = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [_theme.nextui.call(void 0, )],
}
 /* v7-552e65150f7b4de6 */