import React, { useState } from "react";
import "./Count.css";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h1>React Counter</h1>

      <div className="button-box">
        <button onClick={() => setCount(count + 1)} className="btn">
          Increment
        </button>

        <h2>{count}</h2>

        <button onClick={() => setCount(count - 1)} className="btn">
          Decrement
        </button>
      </div>

      <button onClick={() => setCount(0)} className="btn reset-button">
        Reset
      </button>
    </div>
  );
}

export default Count;