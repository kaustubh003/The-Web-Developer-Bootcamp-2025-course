import ColorBox from "./ColorBox";
import "./ColorBoxes.css"
export default function ColorBoxes({ colors }) {
  return (
    <div className="ColorBoxes">
      {colors.map((col) => (
        <ColorBox key={col} colors={colors} />
      ))}
    </div>
  );
}
