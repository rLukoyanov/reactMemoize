import { memo, useState } from "react";
import "./App.css";

function Swatch({ color }) {
  console.log("Swatch redered:" + color);
  return (
    <div
      style={{ margin: 2, width: 75, backgroundColor: color, height: 75 }}
    ></div>
  );
}

const MemoSwatch = memo(Swatch);

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");
  console.log("app rendered:" + appRenderIndex);
  return (
    <div className="App">
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Re-render app
      </button>
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        change color 
      </button>
      <div>
        <MemoSwatch color={color}></MemoSwatch>
      </div>
    </div>
  );
}

export default App;
