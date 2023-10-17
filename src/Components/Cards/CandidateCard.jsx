import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CircularProgress from "@mui/material/CircularProgress";

import { useDogImageQuery } from "../../queries/queryDogImage";
import generateRandomDogName from "../../utils/generateRandomDogName";
import generateDogDescription from "../../utils/generateDogDescription";

const CandidateCard = ({ onLike, onDislike }) => {
  const [candidate, setCandidate] = useState({
    image: null,
    name: null,
    description: null,
  });

  const [buttonsDisabled, setButtonsDisabled] = useState(false); // hooks para desabilitar los botones mientras carga el nuevo candidato
  const [loadingMessage, setLoadingMessage] = useState(null); // mensaje de carga

  const { data, isLoading, isRefetching } = useDogImageQuery();

  const handleAction = (action) => {
    action(candidate);
  };

  useEffect(() => {
    if (data) {
      setCandidate({
        image: data,
        name: generateRandomDogName(),
        description: generateDogDescription(),
      });
    }
    if (isLoading || isRefetching) {
      setButtonsDisabled(true);
      setLoadingMessage("Cargando...");
    } else {
      setButtonsDisabled(false);
      setLoadingMessage(null);
    }
  }, [data, isRefetching, isLoading]);

  return (
    <Card
      sx={{
        maxWidth: 340,
        borderRadius: 2,
      }}
    >
      {loadingMessage ? (
        <>
          <CardContent>
            <CircularProgress />
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <IconButton size="large" disabled={buttonsDisabled}>
              <ThumbDownIcon />
            </IconButton>
            <IconButton size="large" disabled={buttonsDisabled}>
              <ThumbUpIcon />
            </IconButton>
          </CardActions>
        </>
      ) : (
        <>
          {candidate.image && (
            <CardMedia
              component="img"
              width="200"
              height="200"
              image={candidate.image}
              alt="Imagen de perro"
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="left">
              {candidate.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="justify">
              {candidate.description}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <IconButton
              size="large"
              color="primary"
              aria-label="Megusta"
              onClick={() => handleAction(onDislike)}
            >
              <ThumbDownIcon />
            </IconButton>
            <IconButton
              size="large"
              color="primary"
              aria-label="No megusta"
              onClick={() => handleAction(onLike)}
            >
              <ThumbUpIcon />
            </IconButton>
          </CardActions>
        </>
      )}
    </Card>
  );
};
export default CandidateCard;
