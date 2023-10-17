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
  
  const [image, setImage] = useState(null); // imagen del perro
  const [name, setName] = useState(null); // nombre del perro
  const [description, setDescription] = useState(null); // descripcion del perro
  const [buttonsDisabled, setButtonsDisabled] = useState(false); // hooks para desabilitar los botones mientras carga el nuevo candidato
  const [loadingMessage, setLoadingMessage] = useState(null); // mensaje de carga 

  const { data, isLoading, isRefetching } = useDogImageQuery();

  const handleAction = (action) => {
    const data = {
      image: image,
      name: name,
      description: description,
    };
    action(data);
  };

  useEffect(() => {
    if (data) {
      setImage(data);
      setName(generateRandomDogName());
      setDescription(generateDogDescription());
    }
    if (isRefetching || isLoading) {
      setButtonsDisabled(true);
      setLoadingMessage("Cargando...");
    } else {
      setButtonsDisabled(false);
      setLoadingMessage(null);
    }
  }, [data, isRefetching, isLoading]);

  return (
    <Card sx={{ maxWidth: 340, borderRadius: 5 }}>
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
          {image && (
            <CardMedia
              component="img"
              width="200"
              height="200"
              image={image}
              alt="Imagen de perro"
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
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
