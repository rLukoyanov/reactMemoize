import { memo, useCallback, useMemo, useState } from "react";
import "./App.css";

function Swatch({ params, onClick }) {
  console.log("Swatch redered:" + params.color);
  return (
    <div
      style={{
        margin: 2,
        width: 75,
        backgroundColor: params.color,
        height: 75,
      }}
    ></div>
  );
}

const MemoSwatch = memo(Swatch);

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");

  console.log("app rendered:" + appRenderIndex);

  const params = useMemo(() => ({ color }), [color]);
  const onClick = useCallback(() => {}, []);

  return (
    <div className="App">
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Re-render app
      </button>
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        change color
      </button>
      <div>
        <MemoSwatch params={params} onClick={onClick}></MemoSwatch>
      </div>
    </div>
  );
}

export default App;
