import "./App.css";
import Home from "./Components/Home.jsx";
import doginder from "./assets/doginder.svg";

function App() {
  return (
    <div>
      <div style={{ flexDirection: "row", flex: 1 }}>
        <img src={doginder}></img>
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
