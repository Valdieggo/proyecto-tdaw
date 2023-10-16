import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

const MatchCard = ({ likedCandidates, onMove }) => {
  return (
    <>
      {likedCandidates.map((candidate, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 345, borderRadius: 5, marginBottom: 3 }}
        >
          <CardMedia
            sx={{ height: 200 }}
            image={candidate.image}
            title={candidate.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {candidate.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descripción del candidato si la tienes
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{ justifyContent: "center" }}>
            <Button onClick={() => onMove(candidate)} sx={{ mt: 2 }}>
              Arrepentirse
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default MatchCard;
