import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Button,
  CardActions,
  CardHeader,
  CircularProgress,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const RegisterCard = ({ image, refetch, isPending }) => {
  return (
    <Card sx={{ maxWidth: "sm" }}>
      <CardHeader
        title={<Typography variant="body1">Foto de perfil</Typography>}
      />
      {image && (
        <CardMedia
          component="img"
          image={image}
          width="200"
          height="300"
          alt={"Perro"}
        />
      )}
      <CardActions disableSpacing sx={{ p: 0 }}>
        <Button
          variant="contained"
          color={"secondary"}
          onClick={() => refetch()}
          startIcon={
            isPending ? <CircularProgress size={24} /> : <RefreshIcon />
          }
          disabled={isPending}
          fullWidth
        >
          Refrescar
        </Button>
      </CardActions>
    </Card>
  );
};

export default RegisterCard;
