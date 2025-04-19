import { useState } from "react";
import "./ColorBox.css";

function randomChoice(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

export default function ColorBox({ colors }) {
  const [color, setColor] = useState(randomChoice(colors));
  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  };
  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: color }}
      onClick={changeColor}
    ></div>
  );
}
