import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";

const RejectedCard = ({
  dislikedCandidates,
  onMove,
  dogWithOpenDescription,
  toggleDescription,
}) => {
  const getExpansionIcon = (image) =>
    dogWithOpenDescription === image ? <ExpandLessIcon /> : <ExpandMoreIcon />;

  return (
    <>
      {dislikedCandidates.map((candidate, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 340, borderRadius: 2, marginBottom: 3 }}
        >
          <CardMedia
            component="img"
            width="200"
            height="200"
            image={candidate.image}
            alt="Imagen de perro"
            sx={{ objectFit: "contain", objectPosition: "center" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="left">
              {candidate.name}
            </Typography>
            {dogWithOpenDescription === candidate.image && (
              <Typography variant="body2" color="text.secondary"
              align="justify">
                {candidate.description}
              </Typography>
            )}
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <IconButton
              size="large"
              color="error"
              aria-label="descripcion"
              onClick={() => toggleDescription(candidate.image)}
            >
              {getExpansionIcon(candidate.image)}
            </IconButton>
            <IconButton
              size="large"
              color="error"
              onClick={() => onMove(candidate)}
            >
              <SwapHorizontalCircleIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default RejectedCard;
