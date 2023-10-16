import { Box, Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Home from "./Components/Home.jsx";
import doginder from "./assets/doginder.svg";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <img src={doginder} alt="Logo de Doginder" />
        <Home />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
