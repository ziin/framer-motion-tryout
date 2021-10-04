import { createStitches } from '@stitches/react'

const pixelToRem = (value: number) => `${value / 16}rem`

const space = {
  4: pixelToRem(4),
  8: pixelToRem(8),
  12: pixelToRem(12),
  16: pixelToRem(16),
  20: pixelToRem(20),
  24: pixelToRem(24),
  28: pixelToRem(28),
  32: pixelToRem(32),
  36: pixelToRem(36),
  40: pixelToRem(40),
  48: pixelToRem(48),
}

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      background: '#090909',
      text: '#Fafafa',
    },

    fontSizes: space,

    space,
    sizes: space,
    radii: space,
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
})

export const globalStyles = globalCss({
  'html, body': {
    margin: '0',
    padding: '0',
    background: '$background',
    color: '$text',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing:': 'grayscale',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  '*': {
    boxSizing: 'border-box',
  },
})
