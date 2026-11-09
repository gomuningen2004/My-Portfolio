import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#c5f467", contrastText: "#11170a" },
    background: { default: "#0b0f14", paper: "#121820" },
    text: { primary: "#f3f5f2", secondary: "#a1aaa9" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    button: { textTransform: "none", fontWeight: 600 },
  },
});
