import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#D12013",
    },
    background: {
      default: "#F5F5F5",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
  },
});

export default theme;
