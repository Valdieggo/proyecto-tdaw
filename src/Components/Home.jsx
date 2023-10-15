import { useEffect, useState } from "react";
import CandidateCard from "./Cards/CandidateCard";
import MatchCard from "./Cards/MatchCard";
//import RejectedCard from "./Cards/RejectedCard";
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
            <p>Liked</p>
            {/* <List>
            {matches.map((match, index) => (
              <CandidateCard key={index} match={match} />
            ))}
          </List> */}
            <MatchCard likedCandidates={matches} />
          </Grid>

          <Grid item xs={4}>
            <p>Disliked</p>
            <RejectedCard dislikedCandidates={rejecteds} />
          </Grid>
        </Grid>
      </>
    )
  );
};

export default Home;
