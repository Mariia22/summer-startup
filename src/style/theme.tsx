import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  fontFamily: 'Inter',
  lineHeight: '1.4rem',
  defaultRadius: '12px',
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
    grey: ['#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88', '#F7F7F8', '#232134'],
    blue: ['#3B7CD3', '#5E96FC', '#92C1FF', '#B7D6FF', '#C9E0FF', '#DEECFF']
  },
  loader: 'oval',
  components: {
    Button: {
      variants: {
        filled: (theme) => ({
          root: {
            fontSize: '0.875rem',
            lineHeight: '1.31rem',
            textAlign: 'center',
            padding: '5.5px 20px',
            backgroundColor: theme.colors.blue[1],
            borderRadius: '8px',
          },
        }),
      },
    },
  }
}
