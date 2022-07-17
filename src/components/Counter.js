import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // call setCount twice, to update the counter by two every time we click
    setCount(count + 1);
    setCount(count + 1);
  }

  return <button onClick={increment}>{count}</button>;
}

export default Counter;
