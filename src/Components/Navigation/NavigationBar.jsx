import { AppBar, Toolbar } from "@mui/material";

const NavigationBar = ({ children }) => (
  <AppBar position="static" color="background" elevation={0}>
    <Toolbar
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {children}
    </Toolbar>
  </AppBar>
);

export default NavigationBar;
