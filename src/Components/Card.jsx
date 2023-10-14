import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

export default function MediaCard() {
  const [image, setImage] = useState(null);

  const getImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImage(data.message);
      });
  };

  const getImageAsync = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setImage(data.message);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    // Display the card when the image is different to null
    image && (
      <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" onClick={getImageAsync}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
  );
}
