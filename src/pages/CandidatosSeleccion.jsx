import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import CandidateCard from "../Components/Cards/CandidateCard";
import MatchCard from "../Components/Cards/MatchCard";
import RejectedCard from "../Components/Cards/RejectedCard";
import DefaultLayout from "../Components/Layout/DefaultLayout";
import { SCROLL_STYLE } from "../constants/scrollStyle";

const CandidatosSeleccion = () => {
  const [matches, setMatches] = useState([]); // Lista de aceptados
  const [rejecteds, setRejected] = useState([]); // Lista de rechazados
  const [newCandidate, setNewCandidate] = useState(true); // Candidato nuevo
  const [dogWithOpenDescription, setDogWithOpenDescription] = useState(null); // Mostrar descripcion del perro

  // Función para manejar el mostrar/ocultar descripción de un perro
  const handleToggleDescription = (dogUrl) => {
    if (dogWithOpenDescription === dogUrl) {
      setDogWithOpenDescription(null);
    } else {
      setDogWithOpenDescription(dogUrl);
    }
  };
  // Función para agregar un perro a una lista (aceptados o rechazados)
  const addToList = (setter, data) => {
    setter((prev) => [data, ...prev]);
    setNewCandidate(false);
  };

  // Función para mover un perro entre las listas de aceptados y rechazados
  const moveTo = (sourceSetter, targetSetter, candidate) => {
    targetSetter((prev) => [candidate, ...prev]);
    sourceSetter((prev) =>
      prev.filter((item) => item.image !== candidate.image)
    );
    // Cierra la descripción si el perro con descripción abierta es movido

    if (dogWithOpenDescription === candidate.image) {
      setDogWithOpenDescription(null);
    }
  };
  // Efecto que establece un nuevo candidato cada vez que hay cambios en las listas de matches o rejecteds
  useEffect(() => {
    setNewCandidate(true);
  }, [matches, rejecteds]);

  return (
    newCandidate && (
      <DefaultLayout volver={true}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={4} display="flex" justifyContent="center">
              <Box>
                <Typography variant="h6" color="textPrimary">
                  Candidato
                </Typography>
                <CandidateCard
                  onLike={(data) => addToList(setMatches, data)}
                  onDislike={(data) => addToList(setRejected, data)}
                  matches={matches}
                  rejecteds={rejecteds}
                />
              </Box>
            </Grid>
            <Grid xs={6} sm={4}>
              <Typography variant="h6" color="textPrimary">
                Aceptados
              </Typography>
              <Box sx={SCROLL_STYLE}>
                <MatchCard
                  likedCandidates={matches}
                  onMove={(candidate) =>
                    moveTo(setMatches, setRejected, candidate)
                  }
                  dogWithOpenDescription={dogWithOpenDescription}
                  toggleDescription={handleToggleDescription}
                />
              </Box>
            </Grid>
            <Grid xs={6} sm={4}>
              <Typography variant="h6" color="textPrimary">
                Rechazados
              </Typography>
              <Box sx={SCROLL_STYLE}>
                <RejectedCard
                  dislikedCandidates={rejecteds}
                  onMove={(candidate) =>
                    moveTo(setRejected, setMatches, candidate)
                  }
                  dogWithOpenDescription={dogWithOpenDescription}
                  toggleDescription={handleToggleDescription}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DefaultLayout>
    )
  );
};

export default CandidatosSeleccion;
