import { useState, useEffect } from "react";
import { useDogImageQuery } from "../queries/queryDogImage";
import {
  Box,
  Button,
  Divider,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import RegisterCard from "../Components/Cards/RegisterCard";
import AddIcon from "@mui/icons-material/Add";
import { useMutation } from "@tanstack/react-query";
import { dogsServices } from "../services/dogsServices";
import PaperComponent from "../Components/Container/PaperComponent";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import doginder from "../assets/doginder.svg";
import CustomTabPanel from "../Components/Navigation/CustomTabPanel";
import PerfilSeleccion from "../pages/PerfilSeleccion";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const SignUp = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [perro, setPerro] = useState({
    nombre: "",
    foto_url: "",
    descripcion: "",
  });

  const { perroImagen, isRefetching, isLoading, refetch } = useDogImageQuery();

  useEffect(() => {
    setPerro((prevPerro) => ({
      ...prevPerro,
      foto_url: perroImagen,
    }));
  }, [perroImagen]);

  const registrarPerro = useMutation({
    mutationFn: (perro) => dogsServices.crearPerro(perro),
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registrarPerro.mutate(perro);
  };

  return (
    <>
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
          <Typography variant="h6" component="h2" gutterBottom>
            Formulario de Registro de Perro
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            noValidate
          >
            <Grid container spacing={2} maxWidth={"sm"}>
              <Grid xs={12}>
                <TextField
                  label="Nombre"
                  type="text"
                  value={perro.nombre}
                  onChange={(e) =>
                    setPerro((prevPerro) => ({
                      ...prevPerro,
                      nombre: e.target.value,
                    }))
                  }
                  required
                  helperText={perro.nombre ? "" : "Este campo es requerido"}
                  fullWidth
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  label="Descripción"
                  type="text"
                  value={perro.descripcion}
                  onChange={(e) =>
                    setPerro((prevPerro) => ({
                      ...prevPerro,
                      descripcion: e.target.value,
                    }))
                  }
                  required
                  helperText={
                    perro.descripcion ? "" : "Este campo es requerido"
                  }
                  fullWidth
                />
              </Grid>
              <Grid xs={12}>
                <RegisterCard
                  image={perro.foto_url}
                  refetch={refetch}
                  isPending={isLoading || isRefetching}
                />
              </Grid>
              <Grid xs={12}>
                <Button
                  type="submit"
                  startIcon={<AddIcon />}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PerfilSeleccion />
        </CustomTabPanel>
      </PaperComponent>
    </>
  );
};

export default SignUp;
