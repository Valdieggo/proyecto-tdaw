import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import CandidateCard from "./Cards/CandidateCard";
import MatchCard from "./Cards/MatchCard";
import RejectedCard from "./Cards/RejectedCard";

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [rejecteds, setRejected] = useState([]);
  const [newCandidate, setNewCandidate] = useState(true);

  const addMatch = (data) => {
    setMatches((prevMatches) => [...prevMatches, data]);
    setNewCandidate(false);
  };

  const addRejected = (data) => {
    setRejected((prevRejecteds) => [...prevRejecteds, data]);
    setNewCandidate(false);
  };

  const moveToMatches = (candidate) => {
    // Agregar a matches
    setMatches((prevMatches) => [...prevMatches, candidate]);

    // Eliminar de rejecteds
    setRejected((prevRejecteds) =>
      prevRejecteds.filter((item) => item.image !== candidate.image)
    );
  };

  const moveToRejecteds = (candidate) => {
    // Agregar a rejecteds
    setRejected((prevRejecteds) => [...prevRejecteds, candidate]);

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
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" color="textPrimary">
            Candidato
          </Typography>
          <CandidateCard onLike={addMatch} onDislike={addRejected} />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" color="textPrimary">
            Rechazados
          </Typography>
          <RejectedCard dislikedCandidates={rejecteds} onMove={moveToMatches} />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" color="textPrimary">
            Aceptados
          </Typography>
          <MatchCard likedCandidates={matches} onMove={moveToRejecteds} />
        </Grid>
      </Grid>
    )
  );
};

export default Home;
