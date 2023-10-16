import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CircularProgress from "@mui/material/CircularProgress";

import { useDogImageQuery } from "../../queries/queryDogImage";
import generateRandomDogName from "../../utils/generateRandomDogName";
import generateDogDescription from "../../utils/generateDogDescription";

const CandidateCard = ({ onLike, onDislike }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(null);

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
            {/* <Typography variant="body1" align="center">
              {loadingMessage}
            </Typography> */}
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
              // sx={{ color: "#d12013" }}
              color="primary"
              aria-label="Megusta"
              onClick={() => handleAction(onDislike)}
            >
              <ThumbDownIcon />
            </IconButton>
            <IconButton
              size="large"
              // sx={{ color: "#d12013" }}
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
