import "./styles.css";
import Counter from "./Counter";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h2>Total:{count} </h2>
      <Counter name="Fang" count={count} setCount={setCount} />
      <Counter name="Helen" count={count} setCount={setCount} />
    </div>
  );
}
