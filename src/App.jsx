import FavoriteIcon from "@mui/icons-material/Favorite";
import PetsIcon from "@mui/icons-material/Pets";
import { Divider, Tab, Tabs } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import doginder from "./assets/doginder.svg";
import PaperComponent from "./components/Container/PaperComponent";
import CustomTabPanel from "./components/Navigation/CustomTabPanel";
import theme from "./theme/theme";
import PerfilSeleccion from "./pages/PerfilSeleccion";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <img src={doginder} alt="Logo de Doginder" />
      <PaperComponent>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab icon={<PetsIcon />} label="Registrar" {...a11yProps(0)} />
          <Tab
            icon={<FavoriteIcon />}
            label="Selección de perfil"
            {...a11yProps(1)}
          />
        </Tabs>
        <Divider />
        <CustomTabPanel value={value} index={0}>
          <SignUp />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PerfilSeleccion />
        </CustomTabPanel>
      </PaperComponent>
    </ThemeProvider>
  );
}

export default App;
