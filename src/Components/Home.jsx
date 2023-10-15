import { useEffect, useState } from "react";
import CandidateCard from "./Cards/CandidateCard";
import MatchCard from "./Cards/MatchCard";
import { Grid, List, Typography } from "@mui/material";
import RejectedCard from "./Cards/RejectedCard";

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [rejecteds, setRejected] = useState([]);
  const [newCandidate, setNewCandidate] = useState(true);

  const addMatch = (data) => {
    setMatches([...matches, data]);
    setNewCandidate(false);
  };

  const addRejected = (data) => {
    setRejected([...rejecteds, data]);
    setNewCandidate(false);
  };

  useEffect(() => {
    setNewCandidate(true);
  }, [matches, rejecteds]);

  return (
    newCandidate && (
      <>
        <Grid container spacing={2} bgcolor={"#fffff"}>
          <Grid item xs={4}>
            <Typography variant="h6">Candidates</Typography>
            <CandidateCard onLike={addMatch} onDislike={addRejected} />
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h6">Liked</Typography>
            <MatchCard likedCandidates={matches} />
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h6">Disliked</Typography>
            <RejectedCard dislikedCandidates={rejecteds} />
          </Grid>
        </Grid>
      </>
    )
  );
};

export default Home;
