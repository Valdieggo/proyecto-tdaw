import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import RegisterCard from "../Components/Cards/RegisterCard";
import { useDogImageQuery } from "../queries/queryDogImage";
import { dogsServices } from "../services/dogsServices";

import DefaultLayout from "../Components/Layout/DefaultLayout";

const SignUp = () => {
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
    <DefaultLayout>
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
              helperText={perro.descripcion ? "" : "Este campo es requerido"}
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
    </DefaultLayout>
  );
};

export default SignUp;
