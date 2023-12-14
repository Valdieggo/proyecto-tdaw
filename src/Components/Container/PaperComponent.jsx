import { Box, Container, Paper } from "@mui/material";

const PaperComponent = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Paper
        component="section"
        elevation={2}
        sx={{
          px: 3,
          py: 1,
          mb: 4,
        }}
      >
        <Box component="article">{children}</Box>
      </Paper>
    </Container>
  );
};

export default PaperComponent;
