import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { dogsServices } from "../services/dogsServices";
import { useNavigate } from "react-router-dom";

const PerfilSeleccion = () => {
  const navigate = useNavigate();

  const { data: listaPerros, isLoading } = useQuery({
    queryKey: ["listaPerros"],
    queryFn: dogsServices.listarPerros,
    onError: (error) => {
      console.error("Error al cargar los perros: ", error);
    },
    refetchOnWindowFocus: false,
  });

  const handleSelect = (perroId) => {
    navigate("/candidato", { state: { perroId } });
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (listaPerros && listaPerros.length === 0) {
    return <div>No hay perros registrados.</div>;
  }
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "sm",
        margin: "auto",
      }}
    >
      {listaPerros.map((perro) => (
        <Box key={perro.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt={perro.nombre}
                src={perro.foto_url}
                sx={{ width: 100, height: 100, mr: 2 }}
                variant="square"
              />
            </ListItemAvatar>
            <ListItemText
              primary={`Nombre: ${perro.nombre}`}
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {`Descripción: ${perro.descripcion}`}
                </Typography>
              }
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<CheckCircleOutlineIcon />}
              onClick={() => handleSelect(perro.id)}
            >
              Seleccionar
            </Button>
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
};

export default PerfilSeleccion;
