import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import CandidateCard from "./Cards/CandidateCard";
import MatchCard from "./Cards/MatchCard";
import RejectedCard from "./Cards/RejectedCard";

// Estilo opcional, ocultar barra
const SCROLL_STYLE = {
  maxHeight: "70vh",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "0px",
    background: "transparent", // ocultar barra de scroll Chrome
  },
  scrollbarWidth: "none", // ocultar barra de scroll - Firefox
  msOverflowStyle: "none", // ocultar barra de scroll - Internet Explorer y Edge
};

const Home = () => {
  const [matches, setMatches] = useState([]); // Lista de aceptados
  const [rejecteds, setRejected] = useState([]); // Lista de rechazados
  const [newCandidate, setNewCandidate] = useState(true); // Candidato nuevo
  const [dogWithOpenDescription, setDogWithOpenDescription] = useState(null);

  const handleToggleDescription = (dogUrl) => {
    if (dogWithOpenDescription === dogUrl) {
      setDogWithOpenDescription(null);
    } else {
      setDogWithOpenDescription(dogUrl);
    }
  };

  const addToList = (setter, data) => {
    setter((prev) => [data, ...prev]);
    setNewCandidate(false);
  };

  const moveTo = (sourceSetter, targetSetter, candidate) => {
    targetSetter((prev) => [candidate, ...prev]);
    sourceSetter((prev) =>
      prev.filter((item) => item.image !== candidate.image)
    );
  };

  useEffect(() => {
    setNewCandidate(true);
  }, [matches, rejecteds]);

  return (
    newCandidate && (
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
                  moveTo(
                    setRejected,
                    setMatches,
                    candidate
                  )
                }
                dogWithOpenDescription={dogWithOpenDescription}
                toggleDescription={handleToggleDescription}
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
                  moveTo(
                    setMatches,
                    setRejected,
                    candidate
                  )
                }
                dogWithOpenDescription={dogWithOpenDescription}
                toggleDescription={handleToggleDescription}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default Home;
