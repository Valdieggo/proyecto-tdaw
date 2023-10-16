import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
import { useDogImageQuery } from "../../queries/queryDogImage";

const CandidateCard = ({ onLike, onDislike }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(null);

  const { data, isLoading, isRefetching } = useDogImageQuery();

  const generateRandomName = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let randomName = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomName += characters.charAt(randomIndex);
    }

    setName(randomName);
  };

  const handleLike = () => {
    const likeData = {
      name: name,
      image: image,
    };
    onLike(likeData);
  };

  const handleDislike = () => {
    const dislikeData = {
      name: name,
      image: image,
    };
    onDislike(dislikeData);
  };

  useEffect(() => {
    if (data) {
      setImage(data);
      generateRandomName(6);
    }
  }, [data]);

  useEffect(() => {
    if (isRefetching || isLoading) {
      setButtonsDisabled(true);
      setLoadingMessage("Cargando...");
    } else {
      setButtonsDisabled(false);
      setLoadingMessage(null);
    }
  }, [isRefetching, isLoading]);

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
      {loadingMessage ? (
        <>
          <CardContent sx={{ height: 200}}>
            {/* <Typography variant="body1" align="center">
              {loadingMessage}
            </Typography> */}
            <CircularProgress />
          </CardContent>
          <CardActions disableSpacing sx={{ justifyContent: "center" }}>
            <Button
              size="small"
              onClick={handleDislike}
              disabled={buttonsDisabled}
            >
              <ThumbDownIcon />
            </Button>
            <Button
              size="small"
              onClick={handleLike}
              disabled={buttonsDisabled}
            >
              <ThumbUpIcon />
            </Button>
          </CardActions>
        </>
      ) : (
        <>
          <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{ justifyContent: "center" }}>
            <Button
              size="small"
              onClick={handleDislike}
              disabled={buttonsDisabled}
            >
              <ThumbDownIcon />
            </Button>
            <Button
              size="small"
              onClick={handleLike}
              disabled={buttonsDisabled}
            >
              <ThumbUpIcon />
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};
export default CandidateCard;
