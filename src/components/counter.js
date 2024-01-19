import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  //increment
  const increment = () => {
    setCount(count + 3);
  };
  //decrement
  const decrement = () => {
    setCount(count - 5);
  };

  return (
    <div className="container">
      <div>
        <button className="btn btn-3" onClick={decrement}>
          {" "}
          -5{" "}
        </button>
        <button className="btn btn-2" onClick={increment}>
          {" "}
          +3{" "}
        </button>

        <h3 className="counter">Count is {count}</h3>
        <button className="btn btn-3" onClick={() => setCount(0)}>
          {" "}
          Reset{" "}
        </button>
      </div>
    </div>
  );
};

export default Counter;
