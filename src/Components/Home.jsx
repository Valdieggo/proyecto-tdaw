import { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import CandidateCard from "./Cards/CandidateCard";
import MatchCard from "./Cards/MatchCard";
import RejectedCard from "./Cards/RejectedCard";

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [rejecteds, setRejected] = useState([]);
  const [newCandidate, setNewCandidate] = useState(true);
  const [dogWithOpenDescription, setDogWithOpenDescription] = useState(null);

  const handleToggleDescription = (dogUrl) => {
    if (dogWithOpenDescription === dogUrl) {
      setDogWithOpenDescription(null);
    } else {
      setDogWithOpenDescription(dogUrl);
    }
  };

  const addMatch = (data) => {
    setMatches((prevMatches) => [data, ...prevMatches]);
    setNewCandidate(false);
  };

  const addRejected = (data) => {
    setRejected((prevRejecteds) => [data, ...prevRejecteds]);
    setNewCandidate(false);
  };

  const moveToMatches = (candidate) => {
    // Agregar a matches
    setMatches((prevMatches) => [candidate, ...prevMatches]);

    // Eliminar de rejecteds
    setRejected((prevRejecteds) =>
      prevRejecteds.filter((item) => item.image !== candidate.image)
    );
  };

  const moveToRejecteds = (candidate) => {
    // Agregar a rejecteds
    setRejected((prevRejecteds) => [candidate, ...prevRejecteds]);

    // Eliminar de matches
    setMatches((prevMatches) =>
      prevMatches.filter((item) => item.image !== candidate.image)
    );
  };

  useEffect(() => {
    setNewCandidate(true);
  }, [matches, rejecteds]);

  return (
    newCandidate && (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
          <Typography variant="h6" color="textPrimary">
            Candidato
          </Typography>
          <CandidateCard onLike={addMatch} onDislike={addRejected} />
        </Grid>

        <Grid item xs={6} sm={4} md={4}>
          <Typography variant="h6" color="textPrimary">
            Aceptados
          </Typography>
          <Box
            sx={{
              maxHeight: "70vh",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "0px",
                background: "transparent", // make scrollbar transparent
              },
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For Internet Explorer and Edge
            }}
          >
            <MatchCard
              likedCandidates={matches}
              onMove={moveToRejecteds}
              dogWithOpenDescription={dogWithOpenDescription}
              toggleDescription={handleToggleDescription}
            />
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={4}>
          <Typography variant="h6" color="textPrimary">
            Rechazados
          </Typography>
          <Box
            sx={{
              maxHeight: "70vh",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "0px",
                background: "transparent", // make scrollbar transparent
              },
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For Internet Explorer and Edge
            }}
          >
            <RejectedCard
              dislikedCandidates={rejecteds}
              onMove={moveToMatches}
              dogWithOpenDescription={dogWithOpenDescription}
              toggleDescription={handleToggleDescription}
            />
          </Box>
        </Grid>
      </Grid>
    )
  );
};

export default Home;
