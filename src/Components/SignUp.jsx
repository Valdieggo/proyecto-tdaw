import { useState, useEffect } from "react";
import { useDogImageQuery } from "../queries/queryDogImage";
import { Box, Button, Typography, TextField, Grid } from "@mui/material";
import axios from "axios";

const SignUp = () => {
  const [perro, setPerro] = useState({
    nombre: "",
    descripcion: "",
    foto_url: "",
  });

  const { data, refetch } = useDogImageQuery();

  useEffect(() => {
    setPerro((prevPerro) => ({
      ...prevPerro,
      foto_url: data,
    }));
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar la solicitud POST a la API local
    axios
      .post("http://localhost:8000/api/perros/", perro)
      .then((response) => {
        console.log(response.data);
        // Puedes realizar acciones adicionales aquí, como redirigir al usuario o mostrar un mensaje de éxito
      })
      .catch((error) => {
        console.error(error);
        // Puedes manejar errores aquí, como mostrar un mensaje de error al usuario
      });
  };

  return (
    <Box>
      <Typography variant="h4">Registro</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Columna Izquierda: Input de Texto */}
          <Grid item xs={6}>
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
              fullWidth
              margin="normal"
            />
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
              fullWidth
              margin="normal"
            />
          </Grid>

          {/* Columna Derecha: Foto */}
          <Grid item xs={6}>
            {perro.foto_url && (
              <img src={perro.foto_url} alt="Perro" style={{ width: "80%" }} />
            )}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => refetch()}
            >
              Cambiar Foto
            </Button>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Registrar
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
