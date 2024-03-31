import React, { useState } from "react";

export default function AnotherCount() {
  const [anotherCount, anotehrSetCount] = useState(0);
  return (
    <>
      <div className="countContainer">
        <div>count : {anotherCount}</div>
        <button
          type="button"
          onClick={() => anotehrSetCount(0)}
          className="countButton"
        >
          add
        </button>
      </div>
    </>
  );
}
