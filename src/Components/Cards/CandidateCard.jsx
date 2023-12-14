import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useDogRegisterRandom from "../../hooks/useDogRegisterRandom";
import CardLoading from "../Loading/CardLoading";

const CandidateCard = ({ onLike, onDislike }) => {
  const location = useLocation();
  const perroId = location.state.perroId;

  const [candidate, setCandidate] = useState({
    image: null,
    name: "",
    description: "",
  });
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(null); 

  const { perroRegistradoRandom, isRefetching, isLoading } =
    useDogRegisterRandom(perroId);

  const handleAction = (action) => {
    action(candidate);
  };

  useEffect(() => {
    if (perroRegistradoRandom?.foto_url) {
      setCandidate({
        image: perroRegistradoRandom.foto_url,
        name: perroRegistradoRandom.nombre,
        description: perroRegistradoRandom.descripcion,
      });
    }
    if (isLoading || isRefetching) {
      setButtonsDisabled(true);
      setLoadingMessage("Cargando...");
    } else {
      setButtonsDisabled(false);
      setLoadingMessage(null);
    }
  }, [perroRegistradoRandom, isRefetching, isLoading]);

  return (
    <Card
      sx={{
        maxWidth: 340,
        borderRadius: 2,
      }}
    >
      {loadingMessage ? (
        <CardLoading buttonsDisabled={buttonsDisabled} />
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
