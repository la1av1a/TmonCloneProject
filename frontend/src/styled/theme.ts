import baseStyled, { ThemedStyledInterface } from "styled-components";

export enum THEME_TYPE {
  LIGHT = "light",
  DARK = "dark",
}

export const lightTheme = {
  all: {
    borderRadius: "0.5rem",
  },
  main: {
    color: "#FAFAFA",
    textColor: "#212121",
    bodyColor: "#FFF",
  },
  secondary: {
    color: "#757575",
  },
};

// Force both themes to be consistent!
export const darkTheme: Theme = {
  // Make properties the same on both!
  all: { ...lightTheme.all },
  main: {
    color: "#212121",
    textColor: "#FAFAFA",
    bodyColor: "#424242",
  },
  secondary: {
    color: "#616161",
  },
};

export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
