import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useState, useEffect } from "react";

export default function MediaCard({ onLike, onDislike }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);

  const getImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setImage(data.message);
  };

  const generateRandomName = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
    getImage();
    generateRandomName(6);
  }, []);

  return (
    image && (
      <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
        <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button size="small">
            <ThumbDownIcon onClick={handleDislike} />
          </Button>
          <Button size="small" onClick={handleLike}>
            <ThumbUpIcon />
          </Button>
        </CardActions>
      </Card>
    )
  );
}
