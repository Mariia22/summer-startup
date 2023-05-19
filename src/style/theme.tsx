import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily: "Inter",
  lineHeight: "1.4rem",
  defaultRadius: "8px",
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  fontSizes: {
    sm: '0.75em',
    md: '1rem',
  },
  headings: {
    fontWeight: 700,
    sizes: {
      h1: {
        fontWeight: 600,
        lineHeight: "2.25rem",
      },
      h2: {
        fontSize: "1.25rem",
        fontWeight: 700,
        lineHeight: "1.25rem",
      },
      h3: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: "1.513rem",
      },
      h4: {
        fontWeight: 700,
        lineHeight: "1.21rem",
      },
    },
  },
  white: "#FFFFFF",
  black: "#000000",
  colors: {
    grey: [
      "#F5F5F6",
      "#EAEBED",
      "#D5D6DC",
      "#ACADB9",
      "#7B7C88",
      "#F7F7F8",
      "#232134",
      "#ACADB9",
    ],
    blue: ["#3B7CD3", "#5E96FC", "#92C1FF", "#B7D6FF", "#C9E0FF", "#DEECFF"],
  },
  loader: "oval",
  components: {
    Button: {
      variants: {
        filled: (theme) => ({
          root: {
            fontSize: "0.875rem",
            lineHeight: "1.31rem",
            textAlign: "center",
            padding: "5.5px 20px",
            backgroundColor: theme.colors.blue[1],
            borderRadius: "8px",
          },
        }),
        none: (theme) => ({
          root: {
            fontSize: "0.875rem",
            lineHeight: "1.31rem",
            color: theme.colors.grey[3],
            height: "1.5rem",
            padding: "0rem"
          },
        }),
      },
    },
  },
};
