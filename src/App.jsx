import "./App.css";
import Home from "./Components/Home.jsx";
import doginder from "./assets/doginder.svg";
import { QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div style={{ flexDirection: "row", flex: 1 }}>
          <img src={doginder} alt="Logo de doginder"></img>
        </div>
        <div>
          <Home />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
