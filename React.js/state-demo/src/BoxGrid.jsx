import Box from "./Box";
import { useState } from "react";
export default function BoxGrid({ numBoxes = 9 }) {
  const [boxes, setBoxes] = useState(new Array(numBoxes).fill(false));
  const reset = () => {
    setBoxes(new Array(numBoxes).fill(false));
  };
  const toggleBox = (idx) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((value, i) => {
        if (i === idx) return !value;
        else return value;
      });
    });
  };

  return (
    <div className="BoxGrid">
      {boxes.map((b, idx) => (
        <Box key={idx} isActive={b}  toggle={() => toggleBox(idx)} />
      ))}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
