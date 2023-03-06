import { createTheme } from "@mui/material/styles";

export const PRIMARY_COLOR = {
  contrastText: "#FFFFFF",
  main: "#025FEB",
};

export const THEME = createTheme({
  palette: {
    primary: PRIMARY_COLOR,
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          minHeight: "60px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#E4EDF2",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "12px",
        },
      },
    },
  },
});
