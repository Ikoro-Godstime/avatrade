// ? Import function to create Material UI Theme
import { createTheme } from "@mui/material/styles";

// ? Create Dark & Light Theme For Website
export const theme = createTheme({
  palette: {
    primary: {
      main: "#037DFF",
    },
    background: {
      paper: "#101924",
    },
  },
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
      },
      defaultProps: {
        color: "primary",
        disableElevation: true,
        disableRipple: true,
        variant: "contained",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "primary",
          fontSize: "1rem",
        },
      },
      defaultProps: {
        color: "primary",
        size: "small",
        variant: "outlined",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: "500",
          fontSize: "15px",
        },
      },
    },
  },
});

