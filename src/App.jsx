import { Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./Components/Home.jsx";
import doginder from "./assets/doginder.svg";
import "./App.css";
import SignUp from "./Components/SignUp.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <img src={doginder} alt="Logo de Doginder" />
        {/* <Home /> */}
        <SignUp />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
