import "./App.css";
import Card from "./Components/Card.jsx";
import doginder from "./assets/doginder.svg";

function App() {
  return (
    <div>
      <div style={{ flexDirection: "row", flex: 1 }}>
        <img src={doginder}></img>
      </div>
      <div>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
