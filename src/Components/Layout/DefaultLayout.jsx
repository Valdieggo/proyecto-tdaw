import FavoriteIcon from "@mui/icons-material/Favorite";
import PetsIcon from "@mui/icons-material/Pets";
import { Box, Divider } from "@mui/material";
import doginder from "../../assets/doginder.svg";
import CustomNavButton from "../Button/CustomNavButton";
import PaperComponent from "../Container/PaperComponent";
import NavigationBar from "../Navigation/NavigationBar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const DefaultLayout = ({ children, volver = false }) => {
  return (
    <>
      <img src={doginder} alt="Logo de Doginder" />
      <PaperComponent>
        <Box component="nav" mb={2}>
          <NavigationBar>
            {volver ? (
              <CustomNavButton
                label="Volver"
                rute="/perfil"
                icon={<ExitToAppIcon />}
              />
            ) : (
              <>
                <CustomNavButton
                  label="Registro de Perro"
                  rute="/"
                  icon={<PetsIcon />}
                />
                <CustomNavButton
                  label="Selección de perfil"
                  rute="/perfil"
                  icon={<FavoriteIcon />}
                />
              </>
            )}
          </NavigationBar>
          <Divider />
        </Box>
        <Box component="main">{children}</Box>
      </PaperComponent>
    </>
  );
};
export default DefaultLayout;
