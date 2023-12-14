import { Box, Container, Paper } from "@mui/material";

const PaperComponent = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Paper
        component="section"
        elevation={2}
        sx={{
          px: 3,
          pt: 2,
          pb: 4,
          mb: 4,
        }}
      >
        <Box component="article">{children}</Box>
      </Paper>
    </Container>
  );
};

export default PaperComponent;
