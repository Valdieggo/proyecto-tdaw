import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CustomNavButton = ({ label = "Button", rute = "/", icon, sx = {} }) => {
  return (
    <Button color="inherit" component={Link} to={rute} size="small">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          ...sx,
          "&:hover": {
            color: "primary.main",
            ".MuiSvgIcon-root": {
              fill: "primary.main",
            },
          },
        }}
      >
        {icon}
        {label}
      </Box>
    </Button>
  );
};

export default CustomNavButton;
