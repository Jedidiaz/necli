import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: "#fff",
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    fontFamily: "Manrope, Arial, Helvetica, sans-serif",
    color: colors.fontColor,
    fontWeight: 400,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontWeight: 400,
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
      styleOverrides: {
        root: {
          "-webkit-transform": "scale(1)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: colors.fontColor,
          backgroundColor: colors.bgInputColor,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
        size: "small",
      },
      styleOverrides: {
        root: {
          color: colors.fontColor,
          "& .MuiOutlinedInput-root": {
            fontWeight: 500,
            border: "0",
            "&.Mui-disabled": {
              backgroundColor: "#6e6e6e42",
            },
          },
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#5c5c5c",
          fontWeight: 600,
          minWidth: 223,
        },
        filled: {
          fontWeight: 600,
          color: "#5c5c5c",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          minWidth: 223,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "none",
          fontSize: "18px",
          borderRadius: 5,
        },
      },
    },
  },
});

export default theme;
