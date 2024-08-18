import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}
