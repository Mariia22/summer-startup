import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  fontFamily: 'Inter',
  lineHeight: '1.4rem',
  defaultRadius: '12px',
  fontSizes: {},
  headings: {
    fontWeight: 700,
    sizes: {
      h2: {
        fontSize: '1.75rem',
        fontWeight: 700,
        lineHeight: '2.12rem'
      }
    }
  },
  white: '#FFFFFF',
  black: '#000000',
  colors: {
    grey: ['#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88'],
    blue: ['#3B7CD3', '#5E96FC', '#92C1FF', '#B7D6FF', '#C9E0FF', '#DEECFF']
  },
  loader: 'oval',
}
