import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");

  return (
    <div className="page" style={{ backgroundColor: color }}>
      <div className="container">

        <h1>Counter</h1>

        <div className="counter">
          {count}
        </div>

        <div className="btn-row">
          <button className="btn" onClick={() => {
            if (count < 20) setCount(count + 1);
          }}>
            +1
          </button>

          <button className="btn" onClick={() => {
            if (count > 0) setCount(count - 1);
          }}>
            -1
          </button>

          <button className="btn" onClick={() => setCount(0)}>
            Reset
          </button>

          <button className="btn" onClick={() => setCount(Math.min(count + 5, 20))}>
            +5
          </button>

          <button className="btn" onClick={() => setCount(Math.max(count - 5, 0))}>
            -5
          </button>

          <button className="btn" onClick={() => setColor("blue")}>
            Blue
          </button>

          <button className="btn" onClick={() => setColor("red")}>
            Red
          </button>

          <button className="btn" onClick={() => setColor("green")}>
            Green
          </button>
        </div>

        <div className="status">
          {count % 2 === 0 ? "Even" : "Odd"}
        </div>

        <button
          className="random-btn"
          onClick={() => setCount(Math.floor(Math.random() * 21))}
        >
          Random
        </button>

      </div>
    </div>
  );
}

export default App;