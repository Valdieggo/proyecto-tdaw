import {
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
} from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const CardLoading = ({ buttonsDisabled = true }) => {
  return (
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
  );
};

export default CardLoading;
