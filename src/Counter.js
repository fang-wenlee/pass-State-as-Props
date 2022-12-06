import React, { useState } from "react";

const Counter = (props) => {
  const { name, count, setCount } = props;
  const [vote, setVote] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
    setVote(vote - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
    setVote(vote + 1);
  };
  return (
    <div style={{ backgroundColor: "gray", margin: "10px" }}>
      <h2>
        {name}'s vote: {vote}{" "}
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}>Increment </button>
        <button onClick={handleDecrement}>Dcrement </button>
      </div>
    </div>
  );
};

export default Counter;
