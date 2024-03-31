import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="countContainer">
        <div>count : {count}</div>
        <button
          type="button"
          onClick={setCount((prev) => prev + 1)}
          className="countButton"
        >
          add
        </button>
      </div>
    </>
  );
}
