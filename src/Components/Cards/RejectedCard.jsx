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
  return (
    <>
      {dislikedCandidates.map((candidate, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 340, borderRadius: 5, marginBottom: 3 }}
        >
          {console.log(candidate)}
          <CardMedia
            component="img"
            width="200"
            height="200"
            image={candidate.image}
            alt="Imagen de perro"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {candidate.name}
            </Typography>
            {dogWithOpenDescription === candidate.image && (
              <Typography variant="body2" color="text.secondary">
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
              //  sx={{ color: "#d12013" }}
              color="error"
              aria-label="descripcion"
              onClick={() => toggleDescription(candidate.image)}
            >
              {dogWithOpenDescription === candidate.image ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </IconButton>
            <IconButton
              size="large"
              // sx={{ color: "#d12013" }}
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
